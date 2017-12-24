var PDK = require("node-pinterest");
var env = require("./env/environment");
var pinterest = PDK.init(
  "AUdvosUq34QxE_CTV30rcCvker_gFPxrKXZbZaJEhFiTQgBExgAAAAA"
);
//boards/{boardId}/pins?access_token={access_token}&fields=id,url,media,image"
//const redirect_uri = 'http://localhost:3001/connect/pinterest';
//const client_id = '4936142647791208229';
const default_board_id = 31032753621603377;
const default_limit = 10;

function makeOptionsFromParams(fields, req) {
  var cursor = req.param("pinterest_cursor");
  var limit = req.param("limit");
  if (!limit) {
    limit = default_limit;
  }
  return (options = {
    qs: {
      fields: fields,
      limit: limit,
      cursor: cursor
    }
  });
}
function makeResultObject(data, cursor) {
  return {
    cursor: cursor,
    data: data
  };
}

function getBoards(req, res) {
  var options = makeOptionsFromParams("id,name,url,description", req);

  pinterest.api(`me/boards/`, options).then(json => {
    console.log(json.data);
    var boardsMapped = json.data.map(function(obj) {
      var rObj = {
        board_id: obj.id,
        board_name: obj.name,
        board_url: obj.url,
        board_description: obj.description
      };
      return rObj;
    });

    res.status(200).json(makeResultObject(boardsMapped, json.cursor));
  });
}

function getPins(req, res) {
  var options = makeOptionsFromParams("id,url,media,image", req);
  var board_id = req.param("board_id");
  if (!board_id) {
    board_id = default_board_id;
  }
  pinterest.api(`boards/${board_id}/pins`, options).then(json => {
    var pinsMapped = json.data.map(function(obj) {
      var rObj = {
        pin_id: obj.id,
        pin_url: obj.url,
        media_type: obj.media.type,
        image_url: obj.image.original.url,
        image_width: obj.image.original.width,
        image_height: obj.image.original.height
      };
      return rObj;
    });

    res.status(200).json(makeResultObject(pinsMapped, json.cursor));
  });

  //
}

module.exports = {
  getPins,
  getBoards
};

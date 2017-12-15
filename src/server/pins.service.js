var PDK = require('node-pinterest');
var env = require('./env/environment')
var pinterest = PDK.init('AUdvosUq34QxE_CTV30rcCvker_gFPxrKXZbZaJEhFiTQgBExgAAAAA');
//boards/{boardId}/pins?access_token={access_token}&fields=id,url,media,image"
//const redirect_uri = 'http://localhost:3001/connect/pinterest';
//const client_id = '4936142647791208229';
const board_id = 31032753621603377;
const default_limit = 10;

function getPins(req, res){
  var cursor= req.param('pinterest_cursor');
  var limit = req.param('limit');
  if (!limit)
  {
    limit = default_limit;
  }
  var options = {
    qs: {
        fields: "id,url,media,image",
        limit: limit,
        cursor: cursor
    }
  };

  pinterest.api(`boards/${board_id}/pins`,options).then(
    json =>
    {
      console.log(json.data);
      var pinsMapped = json.data.map(function(obj) {
        var rObj = {
          pin_id: obj.id,
          pin_url : obj.url,
          media_type : obj.media.type,
          image_url: image.original.url,
          image_width : image.original.width,
          image_height : image.original.height
        };
        return rObj;
     });
     console.log(pinsMapped)

     var result = {
       cursor : cursor,
       data : pinsMapped
      };
      // // var pins = json.data;
      // // if (json.page.next) {
      // //   //return retrievePage(res, json.page, options);
      // //   console.log(json)
      // // }


      // res.status(200).json(pins);
      res.status(200).json(result);
    }
  );

  //
}


module.exports= {
  getPins
}


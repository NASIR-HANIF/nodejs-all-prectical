const http = require("http");
const mongodb = require("mongodb").MongoClient;
const server = http.createServer((request, response) => {
  const url = "mongodb://127.0.0.1:27017";
  const query = {
  $or : [
    {email : "a@gmail.com"},
    {password : 12346}

  ] 
  };
  const myprojection = {
    projection: {
      _id: 0,
      body: 0,
      userId: 0,
      title: 0
    }
  };

  mongodb.connect(url).then((connection) => {
    const db = connection.db("just");
    db.collection("users").find(query).toArray().then((resData) => {

      if (resData.length == 0) {
        console.log("data not found")
      } else {
        console.log(resData)
      }
    }).catch((error) => {
      throw error;
    })
    response.end();
  }).catch((error) => {
    throw error;
  })
});
server.listen(8080);

// DATABASE OPREATERS
$eq    ==
$ne    !=
$gt     >
$gte   >=
$lt     <
$lte   <=
$in  [1,4,8,14] // in id me se data chahey
$nin [5,55,55] // in id me se data nahi chahey
$and // array me jitney bhi object den gey un sub ki key chahey
$or  // array me jo bhi object key match ker jaye result mil jaye


// sirf find laganay se collection ka pura data a jaye ga
// collection me se koi spacel data find karna hey to find me object dena ho ga
// or object me wo key jo find karna hey
// limit me 10 deya hey to jo bhi number den gey collection ke
// start se matlooba number data dey ga
// ager query empty dalen find methood me or projection dalney pe he
// tamam data filter ho ke mil jaye ga
// query me keyname or value deney pe us object se mutalik tamam object a jaye ga
// id filter karney k leye keh 90 se 100 tek ke id record chahey to
/* query me id key bana ke us ki property me 90 se uper data aye ga


$gt ka matlab grater then
const query = {
    id : {
      $gt : 90
    }
  };*/

  // 90 bhi shamil karna hey to  $gte ka matlab grater then and equel


/*  const query = {
    id : {
      $gte : 90
    }
  };*/

// $lt less then ka matlab 8 se nechey key oobject

/* const query = {
   id : {
     $lt : 8
   }
 };*/

  // $lte less then equel= ka matlab 8 bhi shamil or nechey key oobject

/* const query = {
   id : {
     $lte : 8
   }
 };*/

  //$gte 40ke braber ur 40 se oper ke object,,, 50 ke braber or 50 se nechey ke object
/*
  const query = {
    id : {
      $gte :40,
      $lte :50 
    }
  };
  */



/*$eq  jo object is id ke braber ho ga wo object mil jaye ga
 
  const query = {
    id : {
      $eq :40,
     
    }
  };*/



/*

eq ka matlab equel ke braber ho to ye string tittle me 0 se 10 ki id
ke darmeyan miley us jaga pe ye match karna hey

$eq me mukamal string match honey pe hi data de ga                                                              

  const query = {

      id:{
        $gt : 0,
        $lt : 10
      },
      title : {
        $eq :"magnam facilis autem",
       
      }
    };

*/

/*


regex ka use ker ke find karna tittle me jaha bhi match karey ga wo data de ga
$regex : /abcdef/



const query = {

  id:{
    $gt : 0,
    $lt : 70
  },
  title : {
    $regex : /adipisci placeat illum aut reiciendis qui/
   
  }
};*/



/* 
 $in : [1,8,9,12,56]
 $in me array me jo number den gey us id ke data de ga



  const query = {

    id: {
     $in : [1,8,9,12,56]
    }
   
  };
*/ 



/*
 $nin : [1,8,9,12,56] 
 $nin   ka matlab in id ka data nahi chahey baki sab de do



  const query = {

    id: {
     $nin : [1,8,9,12,56]
    }
   
  };
*/



/*
and opreater me key name $and dena ho ga or  array me [] object
key or value ke sath gitny chahey object bana len
$and : [] 



 const query = {
  $and : [
    {email : "a@gmail.com"},
    {password : 1234}

  ]
   
  };
*/


/*
$or opreater me 1 bhi property match ker gai data mil jaye ga


 $or : [
    {email : "a@gmail.com"},
    {password : 12346}

  ] 
  };
*/
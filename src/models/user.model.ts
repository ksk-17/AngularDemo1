interface location{
    lat:String;
    lng:String;
}

interface add{
    street:String;
    suite:String;
    city:String;
    zipcode:String;
    geo:location;
}

interface comp{
    name:String;
    catchPhrase:String;
    bs:String;
}

export interface User{
    id:Number;
    name:String;
    username:String;
    email:String;
    address:add;
    phone:String;
    website:String;
    company:comp;
}
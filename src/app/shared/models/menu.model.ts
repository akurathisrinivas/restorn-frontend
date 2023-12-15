export interface Menu{
    shot_desc? : any;
    id?:string;
    title?:string;
    type?:string;
    category?:string;
    price?:number;
    status?:any;
    menuImages?:any;
    
}


export interface MenuImages {
   id?: any;
   menuId?: any;
   link?: any;
}

export interface HomePageMenu {
    popularMenuList? : any;
    speacialMenuList? : any;
    lovelyMenuList? : any;
}
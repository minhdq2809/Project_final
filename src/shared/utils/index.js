import api from './../../config/api';

export function getImageUrl(url){
    const imgstr = url && url.replace("uploads/","");
    return `${api.BASE_URF_API}/${imgstr}`
}
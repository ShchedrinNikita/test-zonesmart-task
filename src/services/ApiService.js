import axios from 'axios'

export default class ApiService {
    constructor() {
        this.apiBase = 'http://utss.su/api/'
    }
    JWTCreate(obj) {
        return axios({
            method: 'post',
            url: `${this.apiBase}auth/jwt/create/`,
            data: obj,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
    JWTVerify(access) {
        return axios({
            method: 'post',
            url: `${this.apiBase}auth/jwt/verify/`,
            data: {"token": access},
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
    JWTRefresh(refresh) {
        return axios({
            method: 'post',
            url: `${this.apiBase}auth/jwt/refresh/`,
            data: {"refresh": refresh},
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
    JWTVerifyAndRefresh(access, refresh) {
        return this.JWTVerify(access).then(r => true).catch(r => this.JWTRefresh(refresh).then(r => localStorage.setItem('access', r.data.access)))
    }
    GetUserChannels() {
        return axios({
            method: 'get',
            url: `${this.apiBase}user_channel/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.access}`
            }
        })
    }
    GetEbayCategoryList(channelId, nextPageToken) {
        if (!nextPageToken) {
            return axios.get(`http://utss.su/api/ebay/product/category/?level=&parent_id=&channel_id${channelId}=&is_leaf=True&category_id=`)
        }
        else {
            return axios.get(`http://utss.su/api/${nextPageToken}`)
        }
    }
    GetEbayProductCategoryAspects(id) {
        return axios({
            method: 'get',
            url: `http://utss.su/api/ebay/product/category/${id}/get_aspects/`,
        })
    }
}

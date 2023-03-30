import axios from 'axios'

export function callApi(method, endpoint, data) {
    return axios({
        method: method,
        url: `http://localhost:5000${endpoint}`,
        data: data,
        headers: {
            'Content-Type': 'application/json',
        }
      });
}

export function callApi1(method, endpoint, data) {
    return axios({
        method: method,
        url: `http://localhost:5000${endpoint}`,
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data',
        }
      });
}

export const nienkhoaAPI ={
    themnienkhoa : (data)=>{
        return callApi('post',`/admin/nienkhoa/them`,data);
    },
    laynienkhoa: () => { return callApi('get', '/admin/nienkhoa/lay', null) },
}

export const chuyenmucAPI ={
    themchuyenmuc : (data)=>{
        return callApi('post',`/admin/chuyenmuc/them`,data);
    },
    laychuyenmuc: () => { return callApi('get', '/admin/chuyenmuc/lay', null) },
}

export const khoaAPI ={
    themkhoa : (data)=>{
        return callApi('post',`/admin/khoa/them`,data);
    },
    laykhoa: () => { return callApi('get', '/admin/khoa/lay', null) },
}

export const luanvanAPI ={
    themluanvan : (data)=>{
        return callApi1('post',`/admin/luanvan/them`,data);
    },
    layluanvan: () => { return callApi('get', '/admin/luanvan/lay', null) },
    lay1luanvan: (id) => { 
        return callApi('get', `/admin/luanvan/lay1/${id}`, id) 
    },
    
}
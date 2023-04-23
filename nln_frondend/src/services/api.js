import axios from 'axios'

// export function callApi(method, endpoint, data) {
//     return axios({
//         method: method,
//         url: `http://localhost:5000${endpoint}`,
//         data: data,
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     });
// }
export function callApi(method, endpoint, data) {
    return axios({
        method: method,
        url: `https://nln-khmt-server.onrender.com${endpoint}`,
        data: data,
        headers: {
            'Content-Type': 'application/json',
        }
    });
}
// export function callApi1(method, endpoint, data) {
//     return axios({
//         method: method,
//         url: `http://localhost:5000${endpoint}`,
//         data: data,
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         }
//     });
// }
export function callApi1(method, endpoint, data) {
    return axios({
        method: method,
        url: `https://nln-khmt-server.onrender.com${endpoint}`,
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
}

export const nienkhoaAPI = {
    themnienkhoa: (data) => {
        return callApi('post', `/admin/nienkhoa/them`, data);
    },
    laynienkhoa: () => { return callApi('get', '/admin/nienkhoa/lay', null) },
    xoanienkhoa: (data) => {
        return callApi('delete', `/admin/nienkhoa/xoa`, data);
    },
}

export const chuyenmucAPI = {
    themchuyenmuc: (data) => {
        return callApi('post', `/admin/chuyenmuc/them`, data);
    },
    laychuyenmuc: () => { return callApi('get', '/admin/chuyenmuc/lay', null) },
    xoachuyenmuc: (data) => {
        return callApi('delete', `/admin/chuyenmuc/xoa`, data);
    },
}

export const khoaAPI = {
    themkhoa: (data) => {
        return callApi('post', `/admin/khoa/them`, data);
    },
    laykhoa: () => { return callApi('get', '/admin/khoa/lay', null) },
    xoakhoa: (data) => {
        return callApi('delete', `/admin/khoa/xoa`, data);
    },
}

export const luanvanAPI = {
    themluanvan: (data) => {
        return callApi1('post', `/admin/luanvan/them`, data);
    },
    layluanvan: () => { return callApi('get', '/admin/luanvan/lay', null) },
    lay1luanvan: (id) => {
        return callApi('get', `/admin/luanvan/lay1/${id}`, id)
    },
    layluanvantheokhoa: (id) => {
        return callApi('get', `/admin/luanvan/laytheokhoa/${id}`, id)
    },
    layluanvantheochuyenmuc: (data) => {
        return callApi('get', `/admin/luanvan/laytheochuyenmuc/${data.id}/${data.chuyenmuc}`, data)
    },
    layluanvantheonam: (data) => {
        return callApi('get', `/admin/luanvan/laytheonam/${data.id}/${data.nam}`, data)
    },
    layluanvantheochuyenmucnam: (data) => {
        return callApi('get', `/admin/luanvan/laytheochuyenmucnam/${data.id}/${data.chuyenmuc}/${data.nam}`, data)
    },
    xoaluanvan: (data) => {
        return callApi('delete', `/admin/luanvan/xoa`, data);
    },

}

export const userAPI = {
    login: (data) => {
        return callApi('post', `/login`, data)
    },
    register: (data) => {
        return callApi('post', `/register`, data)
    },
    themyeuthich: (data) => {
        return callApi('post', `/themyeuthich`, data)
    },
    laydsyeuthich: (id) => {
        return callApi('get', `/laydsyeuthich/${id}`, id)
    },
}
import {get, post} from './axios'

//=user

//==map
export const getMapHtml = () => get('/html_control/map')
export const getMapData = (param) => get('/web_data_test/get_map_data', param)
//==main
export const getMainHtml = () => get('/html_control/main')
export const getLabel = () => get('/web_data_test/get_label_liist')
export const getMainData = (param) => get('/web_data_test/get_main_data', param)

//=adim

//==enquire_or_delete_classroom
export const getSelectClassroom = () => get('/html_control/select_classroom')
export const getDetailedData = getMainData
export const postDeleteClassroom = (param) => post('/web_data_test/delete_classroom', param)
//==login
export const getAdim = (param) => get('//web_data_test/administrator', param)
export const getLogin = () => get('/html_control/login')
//==edit_classroom
export const getEditClassroomHtml = (object) => get('/html_control/edit_classroom', object)
export const getAddLabel = (param) => get('/web_data_test/add_label', param)
export const getDelLabel = (param) => get('/web_data_test/del_label', param)
export const getEditClassroom = (param) => get('/web_data_test/edit_classroom', param)
//==recycle_bin
export const getRecycle = () => get('/html_control/recycle')
export const getRecycleLabelLiist = () => get('/web_data_test/get_recycle_label_liist')
export const getRecycleData = getMainData

//=test
export const getUpdate = () => get('/web_data_test/update')
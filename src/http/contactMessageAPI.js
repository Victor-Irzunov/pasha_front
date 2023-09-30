import { $authHost, $host } from "./index"


export const sendMessageContact = async (obj) => {
	const { data } = await $host.post('api/contact', obj)
	return data
}
export const getAllContacts = async () => {
	const { data } = await $authHost.get('api/contact')
	return data
}
export const newIsContact = async () => {
	const { data } = await $authHost.post('api/new-iscontact')
	return data
}
export const delIsContact = async () => {
	const { data } = await $authHost.delete('api/delete-iscontact')
	return data
}
export const getIsContact = async () => {
	const { data } = await $authHost.get('api/get-iscontact')
	return data
}

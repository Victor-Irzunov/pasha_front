import { $authHost, $host } from "./index"


export const messageСandidate = async (obj) => {
	const { data } = await $host.post('api/candidate', obj)
	return data
}
export const getAllCandidates = async () => {
	const { data } = await $authHost.get('api/candidate')
	return data
}

export const newIsCandidat = async () => {
	const { data } = await $authHost.post('api/new-iscandidat')
	return data
}
export const delIsCandidat = async () => {
	const { data } = await $authHost.delete('api/delete-iscandidat')
	return data
}
export const getIsCandidat = async () => {
	const { data } = await $authHost.get('api/get-iscandidat')
	return data
}

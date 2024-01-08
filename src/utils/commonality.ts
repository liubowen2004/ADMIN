/**
 * 获取组织加购数据
 */
export function getStructureList(arr:any,pid:null){
	const newArr:any =[]
	arr.forEach((i:any)=> {
		if(i.pid==pid){
			const children=getStructureList(arr,i.id)
			if(children.length){
				i.children=children
			}
			newArr.push(i)
		}
	});
	return newArr
}
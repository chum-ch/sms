const { cnListItems } = import('./submodule/mongodb/mongodb');

cnListItems({}, 'students').then((res)=> {console.log(res)}).catch(e=>console.error(e));
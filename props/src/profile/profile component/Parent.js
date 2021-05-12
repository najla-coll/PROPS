import React from 'react'
import Child from './Child'


const Parent = () => {
   const  alertMyInput = name => alert(name)
   
    return (
        <div>
                <Child    fullName ="Najla Yousfi"
                          bio ="najla yousfi is a web designer, product designer ,front-end ,developer,speaker and writer.
                          she is known for her love of plants ,but is also crazy about typography,cats and coffee "
                          profession =" Développeuse Full Stack  " 
                          alertMyInput = {alertMyInput}>
                   
                          <img src="/imageInPublic.jpg"  alt ="imageofprofile" />
                </Child>
        </div>
    )
}

export default Parent

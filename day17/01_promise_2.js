{
    // Promise.all()
    // 将多个promise对象封装成一个新的promise对象
    // 只有当所有promise对象的状态都变成fulfilled时
    // 新的promise对象才会变成fulfilled状态
    // 只要有一个是rejected状态,新的promise对象就是rejected

    //  同时加载多张图片，将其显示在页面上
    // let loadImg=src=>{}
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img=document.createElement('img');
            img.src=src;
            img.width=300;
            // 图片加载完成后
            img.onload=()=>{
                // 加载完成，返回img
                resolve(img);
            }
            img.onerror=err=>{
                // 加载失败，返回错误信息
                reject(err);
            }
        })
    }
    // Promise.allSettled()
    Promise.allSettled([
        loadImg('https://ss3.bdstatic.om/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2827096446,3381823513&fm=26&gp=0.jpg'),
        loadImg('https://ss0.bdstatic.om/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3932293073,2487148149&fm=26&gp=0.jpg'),
        loadImg('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1466113363,3336313894&fm=26&gp=0.jpg'),
        loadImg('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3307069201,1152544396&fm=26&gp=0.jpg')
    ])
    .then(results=>{
        console.log(results)
        results.forEach(img=>{
          console.log(img)
          if(img.status=='fulfilled'){
            document.body.appendChild(img.value)
          }else{
            let h1 = document.createElement('h1');
            h1.innerHTML = '图片加载失败'
            document.body.appendChild(h1)
          }
        })
      })

    // Promise.race()
    // 参数和all()方法一样，是一个promise实例数组
    // 返回值也是一个新的promise对象
    // 当参数中的promise有一个状态转变为fulfilled
    // 新的promise状态就会变成fulfilled，剩下的忽略
    /* Promise.race([
        loadImg('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2827096446,3381823513&fm=26&gp=0.jpg'),
        loadImg('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3932293073,2487148149&fm=26&gp=0.jpg'),
        loadImg('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1466113363,3336313894&fm=26&gp=0.jpg'),
        loadImg('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3307069201,1152544396&fm=26&gp=0.jpg')
    ])
    .then(img=>{
        console.log(img);
        document.body.appendChild(img);
    })
    .catch(err=>{
       console.log(err); 
    }) */

    // all方法的参数是一个promise的实例数组
    // 返回值是一个新的promise对象
    /* Promise.all([
        loadImg('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2827096446,3381823513&fm=26&gp=0.jpg'),
        loadImg('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3932293073,2487148149&fm=26&gp=0.jpg'),
        loadImg('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1466113363,3336313894&fm=26&gp=0.jpg'),
        loadImg('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3307069201,1152544396&fm=26&gp=0.jpg')
    ])
    // 全部加载成功后
    .then(imgs=>{
        console.log(imgs);
        imgs.forEach(img=>{
            document.body.appendChild(img);
        })
    })
    // 捕获第一个加载失败的promise对象
    .catch(err=>{
        console.log(err);
    }) */

}
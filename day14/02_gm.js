var gm=require("gm");

// 处理图片
/* gm('./timg.jpg') //被处理图片的路径
// .flip()   //垂直翻转
// .magnify()  //图片放大一倍
// .rotate('white', 45) //旋转45度，空白部分使用写的颜色填充
// .blur(7, 3) //使图片模糊化，失去焦点
// .crop(300, 300, 150, 130) //剪切图片，宽 高 XY坐标
// .edge(3) //雕版刻画  锐化 
.write('./2.jpg', function (err) {
    // 处理后得到的新的图片的路径(输出路径) 
  if (err) {
      console.log(err);
      console.log('修图出错');
      return ;
    }
    console.log('修图成功')
}) */


// 画圆 加文字
gm('./timg.jpg')
.stroke("#ffffff") //描边颜色
.drawCircle(100,100, 40, 40) //画圆 大小 XY坐标
.font("./HelveticaInserat.ttf", 70) //字体类型 大小
.drawText(300, 200, "GMagick!") //文字
.write("./2.jpg", function (err) {
    if (err) {
        console.log(err);
        console.log('error');
        return ;
    }
    console.log("success");
});
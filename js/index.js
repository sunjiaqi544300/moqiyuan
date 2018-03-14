var sjq_width=0;
      $(document).ready(function () {
				//懒加载
				$("img").lazyload();
				
        //导航栏切换
        $("header ul li.li").click(function(){
        	$(this).addClass("act").siblings().removeClass()
        })
      	
      	//nav---轮播图js
      		sjq_width=$("body").width();
					$("nav ul>li").css("width",sjq_width+"px");
					console.log(sjq_width);
					$("nav ul").css("width",($("nav ul>li").length+1)*$("nav ul>li").width()+"px");
				
          var i = 0;

          var clone = $("nav .img li").first().clone();//克隆第一张图片
          $("nav .img").append(clone);//复制到列表最后
          var size = $("nav .img li").length;
         

          for (var j = 0; j < size-1; j++) {
              $("nav .num").append("<li></li>");
          }

          $("nav .num li").first().addClass("on");

          /*自动轮播*/

          var t = setInterval(function () { i++; move();},2000);

          /*鼠标悬停事件*/

          $("nav").hover(function () {
              clearInterval(t);//鼠标悬停时清除定时器
          }, function () {
              t = setInterval(function () { i++; move(); }, 2000); //鼠标移出时清除定时器
          });


        /*鼠标滑入原点事件*/

          $("nav .num li").hover(function () {

              var index = $(this).index();//获取当前索引值
              i = index;
              $("nav .img").stop().animate({ left: -index * sjq_width }, 500);
              $(this).addClass("on").siblings().removeClass("on");
          });



          /*向左按钮*/
          $("nav .btn_l").click(function () {
              i++;
              move();
          })

          
          /*向右按钮*/
          $("nav .btn_r").click(function () {
              i--;
              move();
          })

          /*移动事件*/
          function move() {
              if (i == size) {
                  $("nav .img").css({ left: 0 });
                  i = 1;
              }
              if (i == -1) {
                  $("nav .img").css({ left: -(size - 1) * sjq_width });
                  i = size - 2;
              }
              $("nav .img").stop().animate({ left: -i * sjq_width }, 500);

              if (i == size - 1) {
                  $("nav .num li").eq(0).addClass("on").siblings().removeClass("on");
              } else {
                  $("nav .num li").eq(i).addClass("on").siblings().removeClass("on");
              }
          }
          
          //s-chanp2---滚动轮播
          var obj=$(".s-chanp2");
					var oBox=$('.s-chanp2 ul');
					var oPrev=$('#btn_l');
					var oNext=$('#btn_r');
					
					oBox.html(oBox.html()+oBox.html())
					var aLi=oBox.children();
					var nLiL=aLi.length/2;
					var oLiW=aLi.eq(0).outerWidth();
					oBox.css('width',oLiW*nLiL*2);
					var w=oBox.outerWidth()/2;
					var timer=null;
		
					var left=0;
					var dis=0;
					var add=true;
					var bFlag=false;
					var moveRight=false;
					setTimeout(scrollR,1000);
			
					obj.hover(function (){
						clearTimeout(obj.timer);
						bFlag=true;
					},function (){
						bFlag=false;
					});
          /*向左按钮*/
          oPrev.click(function () {
              moveRight=true;
							add=true;
          })

          
          /*向右按钮*/
          oNext.click(function () {
              moveRight=false;
							add=true;
          })
          
  function scrollR(){
			setInterval(function (){
				if(!add)
				{
					if(bFlag)
					{
						moveRight=false;
						return;
					}
					else
					{
						bFlag=true;
						obj.timer=setTimeout(function (){
							add=true;
							bFlag=false;
						},2000);
					};
				}
				else
				{
					if(moveRight)
					{
						left+=(oLiW/20);
					}
					else
					{
						left-=(oLiW/20);
					}
					
					left%=w;
					dis=(left/oLiW).toFixed(2);
					
					if(left<0)
					{
						oBox.css('left',dis*oLiW);
						stopMove();
					}
					else
					{
						oBox.css('left',dis*oLiW-w);
						stopMove();
					}
				}
			},30);
    }
  
	  	function stopMove(){
				for(var i=0;i<nLiL;i++){
					(function (index){
						if( Math.abs(dis)==i)
						{	
							var nowLeft=Math.abs(oBox.position().left/oLiW)+1;
							(nowLeft==nLiL+1)&&(nowLeft=1);
							//oSpan.html(nowLeft+'/'+nLiL);
							add=false;
						}
					})(i);
				}
			}
  });
    
      
      
    
		$(window).resize(function() {
			sjq_width=$("body").width();
			$("nav ul>li").css("width",sjq_width+"px");
			$("nav ul").css("width",($("nav ul>li").length+1)*$("nav ul>li").width()+"px");
		})
		

// 百度地图API功能
	var map = new BMap.Map("allmap");  
	map.centerAndZoom(new BMap.Point(97.672859,40.205597),13); 
	setTimeout(function(){
		map.setZoom(13);   
	}, 2000);  //2秒后放大到14级
	map.addControl(new BMap.NavigationControl());        // 添加平移缩放控件
	map.addControl(new BMap.ScaleControl());             // 添加比例尺控件
	map.addControl(new BMap.OverviewMapControl());       //添加缩略地图控件
	map.enableScrollWheelZoom();                         //启用滚轮放大缩小
	map.disable3DBuilding();
	map.enableScrollWheelZoom(true);
	// 用经纬度设置地图中心点
	
	var new_point = new BMap.Point(97.689959,40.264597);
	var marker = new BMap.Marker(new_point);  // 创建标注
	map.addOverlay(marker);              // 将标注添加到地图中
	map.panTo(new_point);      
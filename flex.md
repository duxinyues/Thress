弹性布局可以简洁、完整、响应式的实现各种页面布局。

只需要在父元素设置为flex布局即可：display:felx或者display:inline-flex。那其子元素的float、clear和vertical-align的属性就无效，父元素成为flex容器，就默认了父容器里面只有一行。

flex容器有6个属性：

属性 | 说明
--- | ---
flex-direction | 决定了弹性容器子元素的排列方式
flex-wrap | 设置了弹性容器超出时，是否换行
flex-flow | flex-direction 和 flex-wrap 的简写
align-items | 设置弹性容器的子元素在纵轴方向的对齐方式
align-content | 和align-items,但不设置子元素对齐，只是设置行对齐
justify-content | 设置弹性容器子元素在主轴（横轴）方向上的对齐方式

> 1、flex-direction：决定主轴的方向，就是子元素的排列方向。在一个容器内无非就是四种排列方向：

第一种起点在左端的水平方向，则属性值为row，也是`flex-direction`属性的默认值；

第二种就是起点在右端的水平方向，则属性值为`row-reverse`；

第三种是起点在上端的垂直方向，则属性值是column；

第四种是起点在下端的垂直方向，则属性值是`column-reverse`。

> 2、flex-wrap：在默认的情况下，flex容器的子元素的是排列成一行的，flex-wrap属性定义在一行排不完时，如何换行，是否换行。有三个属性值：

nowrap:不换行

wrap：换行 ，多余的子元素排在第一行的下方

wrap-reverse：换行，多余的子元素排在第一行的上方。

> 3、flex-flow：是flex-direction属性和flex-wrap属性的简写，默认值：row

 nowrap 。

第一个属性值表示flex-direction属性值，第二个属性值表示flex-wrap属性值。

> 4、justify-content：该属性定义了子元素在主轴方向的对齐方式，有五个属性值供选择：

flex-start：默认值，左对齐

flex-end：右对齐

center：居中

space-between：两端对齐

space-around：每个子元素对两侧的间距相等，那么每两个子元素的间距是子元素与边框间距的两倍。
       

> 5、align-items：定义子元素在交叉轴上的对齐方式，有五个属性值：

flex-start：交叉轴起点对齐

flex-end：交叉轴终点对齐

center：交叉轴中点对齐

baseline：就是子元素的第一行文字基线对齐

stretch：默认值，若是子元素没有设置高度或者是auto的话，那子元素就沾满容器的高度
       

> 6、align-content：定义了多轴对齐方式，若是子元素只有一根轴线的话，align-content属性就不起作用了，有6个属性值：

flex-start：与交叉轴的起点对齐

flex-end：与交叉轴的终点对齐

center：与交叉轴的中点对齐

space-between：与交叉轴两端对齐，轴线之间的间隔平均分布

space-around：每根轴线两侧的间距相等。

stretch：默认值，轴线占满整个交叉轴

       
子元素有六个属性可以设置：
       
order：定义了子元素的排列顺序，数值越小，就越是靠前

flex-grow：定义子元素放大的比例，默认值是0   

flex-shrink：定义了子元素的缩小比例，默认值是1，就是剩余空间不足，该子元素就会缩小，若有一个子元素 flex-shrink属性设置为0，其他都是1的话，那么在剩余空间不足的时候，该子元素不变，其他子元素等比例缩小
       
flex-basis：定义了子元素在分配剩余空间的时候，该子元素占据主轴的空间，默认值auto，就是该子元素本来的空间大小，也可以设置成具体的数值（200px），表示该子元素的固定空间大小。
      
 flex：是flex-grow, flex-shrink 和 flex-basis属性的简写，默认值是：0 1 auto。若是设置为auto，则表示为 1 1 auto；设置为none,则表示为 0 0 auto
       
align-self：定义了该元素与其他元素的不一样的对齐方式，覆盖了align-items属性，默认值auto，表示继承父元素的align-items的属性值，若没有父元素，则是等同于stretch。flex-start | flex-end | center | baseline | stretch都与align-items属性完全一致。
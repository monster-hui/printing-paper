window.onload=function(){
    var data=['ITEM000001','ITEM000001','ITEM000001','ITEM000001','ITEM000001','ITEM000003-2','ITEM000005','ITEM000005','ITEM000005'];
	var custumerBarcode=getCustumerBarcode(data);
	displayCommodity(custumerBarcode);
}
//提取商品条码和个数。
function getCustumerBarcode(data){
	var dataCommodity=[]
	dataCommodity[0]=[];
	dataCommodity[1]=[];
	data=data.sort();
	var form=/-/;
	for(var i=0,j=0,length=data.length;i<length;i++){
		var  n=1;
		if(form.test(data[i])){
			var nd=data[i].split(form);
			data[i]=nd[0];
			n=parseFloat(nd[1]);
		} 			
		if(i<1){
			dataCommodity[1][j]=0;
		}
		else if(data[i]!=data[i-1]){
			j++;	
			dataCommodity[1][j]=0;
		}
		dataCommodity[0][j]=data[i];
		dataCommodity[1][j]+=n;
	}
	return dataCommodity;
}

//查询条码对应商品信息
function  findCommodity(Barcode){
	for(var i=0,length=myCommodity.length;i<length;i++){
			if(Barcode==myCommodity[i].get_barcode())return myCommodity[i];
	}

    return;
}
//获取满一百减十块优惠信息
function  findPromotion(string_type){
	for(var i=0,length=myPromotion.length;i<length;i++){
		if(myPromotion[i].get_type()==string_type) return myPromotion[i];		
	}
	alert(type+'优惠活动不存在!');
	return;
}
//判断商品是否有相应优惠
function  isPromotion(barcode,promotion){
	var barcodes=promotion.get_barcodes();
	for(var j=0,length=barcodes.length;j<length;j++){
		if(barcode==barcodes[j])return true;
	}
	return false;
}

//显示商品清单
function  displayCommodity(array_Barcode){
	var count=0.00;
	var costdown=0;
	var flag=false;
	for(var i=0,length=array_Barcode[0].length;i<length;i++){		
		var custumerCommodity=findCommodity(array_Barcode[0][i]);		
		if(!custumerCommodity){
			alert(array_Barcode[i]+'不存在!');
			contiune;
			}
		var oPin=createNode('list','li');		
		var barcode=custumerCommodity.get_barcode();
		var name=custumerCommodity.get_name();
		var number=array_Barcode[1][i];
		var _unit=custumerCommodity.get_unit();
		var price=custumerCommodity.get_price();
		var content1='名称：'+name+'，数量：'+number+_unit+'，单价：'+keep_two_decimals(price)+'(元)，小计：';
		var add=number*price;	
		var promotion=findPromotion('SINGLE_ITEM_BUY_HUNDRED_DISCOUNT_TEN');	
		if(!!promotion&isPromotion(array_Barcode[0][i],promotion)){
			 flag=true;
			 var privilege=Math.floor(add/100)*10
			 var oPin2=createNode('promotion','li');
			 costdown+=privilege;
			 oPin2.innerHTML=name+'，原价：'+ keep_two_decimals(add)+'(元)，优惠：'+ keep_two_decimals(privilege) +'(元)';
			 add-=privilege
			 content1+=keep_two_decimals(add)+'(元)，优惠：'+keep_two_decimals(privilege)+'(元)';
			}
		else{
			 content1+=keep_two_decimals(add)+'(元)';
			}
			 
		oPin.innerHTML=content1;
		count+=add;		
	}
	var oAdd=createNode('count','li');	
	oAdd.innerHTML='总计：'+keep_two_decimals(count)+'(元)'
	if(flag){
		document.getElementById('promotion').style.display='block';
		var oAdd=createNode('count','li');
		oAdd.innerHTML='节省：'+costdown+'(元)';
	}
}
//创建节点
function  createNode(parentId,element){
	var oParent = document.getElementById(parentId);// 获取商品清单父节
	var oPin=document.createElement(element);//创建 一行商品
	oParent.appendChild(oPin); //添加商品
	return oPin;
}
//实现保留两位小数
function  keep_two_decimals(value){
	var value=Math.round(parseFloat(value)*100)/100;
	var xsd=value.toString().split(".");
	if(xsd.length==1){
		value=value.toString()+".00";
		return value;
	}
	if(xsd.length>1){
		if(xsd[1].length<2) value=value.toString()+"0";		
	}
	return value;
}

//商品对象构造
var Commodity=function(spec){
	var that ={};
	that.get_barcode=function(){
		return spec.barcode;
	};
	that.get_name=function(){
		return spec.name||'';
	};
	that.get_unit=function(){
		return spec.unit||'';
	};
	that.get_category=function(){
		return spec.category||'';
	};
	that.get_subCategory=function(){
		return spec.subCategory||'';
	};
	that.get_price=function(){
		return spec.price||0;
	};
	that.get_items=function(){
		return spec.items||'';
	};
	return that;	
}

//实例化商品
var myCommodity=[];
myCommodity[0]=Commodity({ barcode: 'ITEM000000',name: '可口可乐',unit:'瓶',category: '食品',subCategory: '碳酸饮料',price: 3.00});
myCommodity[1]=Commodity({ barcode: 'ITEM000001',name: '篮球',unit:'个',category: '运动用品',subCategory: '球类',price: 95.00});
myCommodity[2]=Commodity({ barcode: 'ITEM000002',name: '羽毛球',unit:'个',category: '运动用品',subCategory: '球类',price: 1.00});
myCommodity[3]=Commodity({ barcode: 'ITEM000003',name: '苹果',unit:'斤',category: '食品',subCategory: '水果',price: 3.50});
myCommodity[4]=Commodity({ barcode: 'ITEM000004',name: '雪碧',unit:'瓶',category: '食品',subCategory: '碳酸饮料',price: 3.00});
myCommodity[5]=Commodity({ barcode: 'ITEM000005',name: '面包',unit:'盒',category: '食品',subCategory: '甜点',price: 3.00});
myCommodity[6]=Commodity({ barcode: 'ITEM000006',name: '巧克力',unit:'盒',category: '食品',subCategory: '甜点',price: 36.00});




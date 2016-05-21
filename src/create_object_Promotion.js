//优惠对象构造
var Promotion=function(apec){
	var that={};
	that.get_type=function(){
		return spec.type;
		};
	that.get_barcodes=function(){
		return spec.barcodes;
		};
	}
//实例化打折信息
var myPromotion=[];
myPromotion[0]=Promotion(
   {
     type: 'SINGLE_ITEM_BUY_HUNDRED_DISCOUNT_TEN',
     barcodes: [
       'ITEM000000',
       'ITEM000001'
     ]
   }
)


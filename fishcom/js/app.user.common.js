jQuery(document).ready(function(){
//�ύ����
     $('#form_postorder button[type="reset"]').click( function(){$("#form_postorder button.green").removeAttr("disabled");$("#callinfo").html("");});
		$("#form_postorder button.green").click( function(){
		  var channeltype=$("#xk_channelId").val();
		  var channelname=$("#xk_channelname").val();
		  var xkcardid=$("#xk_cardId").val();
		  var xkcardpass=$("#xk_cardPass").val();
		  var xkfacevalue=$("#xk_faceValue").val();
		  var cmgs="�����������";
		  var mmgs="�����������";
          if(xkcardid==''){$("#xk_cardId").focus();$("#callinfo").html(errico+"�����뿨��</span>");return false};
          if(xkcardpass==''){$("#xk_cardPass").focus();$("#callinfo").html(errico+"�����뿨����</span>");return false};
		  if(xkfacevalue==''){$("#xk_faceValue").focus();$("#callinfo").html(errico+"��������ȷ�Ŀ����</span>");return false};
		  switch (channeltype){
			case '4':
			  if(xkcardid.length!=9){$.dialog({title: lktitle,content:channelname+cmgs + "<br />����Ϊ9λ",lock: true,fixed:true,cancelVal: 'ȷ��',cancel: function () {$("#xk_cardId").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}
			  else
			 {if(xkcardpass.length!=12){$.dialog({title: lktitle,content:channelname+mmgs + "<br />����Ϊ12λ",lock: true,fixed:true,cancelVal: 'ȷ��',cancel: function () {$("#xk_cardPass").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}}
			  break;//��Ѷ��
			case '5':
			  if(xkcardid.length!=15 && xkcardid.length!=16){$.dialog({title: lktitle,content:channelname+cmgs + "<br />����Ϊ15��16λ",lock: true,fixed:true,cancelVal: 'ȷ��',cancel: function () {$("#xk_cardId").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}
			  else
			 {if(xkcardpass.length!=8 && xkcardpass.length!=9){$.dialog({title: lktitle,content:channelname+mmgs + "<br />����Ϊ8��9λ",lock: true,fixed:true,cancelVal: 'ȷ��',cancel: function () {$("#xk_cardPass").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}}
			  break;//ʢ��
			case '6':
			  if(xkcardid.length!=16){$.dialog({title: lktitle,content:channelname+cmgs + "<br />����Ϊ16λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardId").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}
			else
			{if(xkcardpass.length!=16){$.dialog({title: lktitle,content:channelname+mmgs + "<br />����Ϊ16λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardPass").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}}
			break;//����һ��ͨ
			case '7':
			  if(xkcardid.length!=10){
			  $.dialog({title: lktitle,content:channelname+cmgs + "<br />����Ϊ10λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardId").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}else{
			if(xkcardpass.length!=15){$.dialog({title: lktitle,content:channelname+mmgs + "<br />����Ϊ15λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardPass").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}}break;//����һ��ͨ
			case '8':
			  if(xkcardid.length!=20){
			  $.dialog({title: lktitle,content:channelname+cmgs + "<br />����Ϊ20λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardId").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}else{
			if(xkcardpass.length!=12){
			  $.dialog({title: lktitle,content:channelname+mmgs + "<br />����Ϊ12λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardPass").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}}break;//�Ѻ�һ��ͨ
			case '9':
			  if(xkcardid.length!=16){
			  $.dialog({title: lktitle,content:channelname+cmgs + "<br />����Ϊ16λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardId").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}else{
			if(xkcardpass.length!=8){
			  $.dialog({title: lktitle,content:channelname+mmgs + "<br />����Ϊ8λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardPass").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}}break;//��;��Ϸ��
			case '10':
			  if(xkcardid.length!=13){
			  $.dialog({title: lktitle,content:channelname+cmgs + "<br />����Ϊ13λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardId").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}else{
			if(xkcardpass.length!=10){
			  $.dialog({title: lktitle,content:channelname+mmgs + "<br />����Ϊ10λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardPass").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}}break;//����һ��ͨ
			case '11':
			  if(xkcardid.length!=13){
			  $.dialog({title: lktitle,content:channelname+cmgs + "<br />����Ϊ13λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardId").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}else{
			if(xkcardpass.length!=9){
			  $.dialog({title: lktitle,content:channelname+mmgs + "<br />����Ϊ9λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardPass").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}}break;//����һ��ͨ
			case '12':
			  if(xkcardid.length!=20){
			  $.dialog({title: lktitle,content:channelname+cmgs + "<br />����Ϊ20λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardId").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}else{
			if(xkcardpass.length!=8){
			  $.dialog({title: lktitle,content:channelname+mmgs + "<br />����Ϊ8λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardPass").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}}break;//����һ��ͨ
			case '13':
			  if(xkcardid.length!=19){
			  $.dialog({title: lktitle,content:channelname+cmgs + "<br />����Ϊ19λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardId").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}else{
			if(xkcardpass.length!=18){
			  $.dialog({title: lktitle,content:channelname+mmgs + "<br />����Ϊ18λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardPass").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}}break;//���ų�ֵ��
			case '14':
			  if(xkcardid.length!=17){
			  $.dialog({title: lktitle,content:channelname+cmgs + "<br />����Ϊ17λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardId").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}else{
			if(xkcardpass.length!=18){
			  $.dialog({title: lktitle,content:channelname+mmgs + "<br />����Ϊ18λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardPass").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}}break;//�����г�ֵ��
			case '15':
			  if(xkcardid.length!=15){
			  $.dialog({title: lktitle,content:channelname+cmgs + "<br />����Ϊ15λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardId").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}else{
			if(xkcardpass.length!=19){
			  $.dialog({title: lktitle,content:channelname+mmgs + "<br />����Ϊ19λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardPass").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}}break;//��ͨ��ֵ��
			case '16':
			  if(xkcardid.length!=15){
			  $.dialog({title: lktitle,content:channelname+cmgs + "<br />����Ϊ15λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardId").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}else{
			if(xkcardpass.length!=15){
			  $.dialog({title: lktitle,content:channelname+mmgs + "<br />����Ϊ15λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardPass").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}}break;//����һ��ͨ
			case '17':
			  if(xkcardid.length!=10 && xkcardid.length!=12){
			  $.dialog({title: lktitle,content:channelname+cmgs + "<br />����Ϊ10��12λ",lock:true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardId").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}else{
				  if(xkcardpass.length!=10 && xkcardpass.length!=15){
			  $.dialog({title: lktitle,content:channelname+mmgs + "<br />����Ϊ10��15λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardPass").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}}break;//���һ��ͨ
			case '18':
			  if(xkcardid.length!=15){
			  $.dialog({title: lktitle,content:channelname+cmgs + "<br />����Ϊ15λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardId").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}else{
			if(xkcardpass.length!=8){
			  $.dialog({title: lktitle,content:channelname+mmgs + "<br />����Ϊ8λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardPass").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}}break;//����һ��ͨ
			case '23':
			  if(xkcardid.length!=15){
			  $.dialog({title: lktitle,content:channelname+cmgs + "<br />����Ϊ15λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardId").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}else{
			if(xkcardpass.length!=8 && xkcardpass.length!=10 && xkcardpass.length!=12 && xkcardpass.length!=14 && xkcardpass.length!=16){
			  $.dialog({title: lktitle,content:channelname+mmgs + "<br />����Ϊ8��10��12��14��16λ",lock: true,fixed:true,okVal: 'ȷ��',ok: function () {$("#xk_cardPass").focus();},icon: 'warning',width:'250px',height:'90px'});return false;}}break;//ŷ��һ��ͨ
		
		  }//switch end	
		if(parseInt(xkfacevalue)<1||parseInt(xkfacevalue)>1000){$("#xk_faceValue").focus();$("#callinfo").html(errico+"��������ȷ�Ŀ����</span>");return false};
		var postorderdata=$("#form_postorder").serialize();$(".required").val("");
		$("#callinfo").css({color:"#666666"});$("#callinfo").html(ldico+"�����ύ</span>");
		$.ajax({
                    type: "get",
                    contentType: "text/html",
                    url: "set/",
                    data: postorderdata,
					error: function() {$("#callinfo").css({color:"red"});
                    $("#callinfo").html(errico+"�ύ���ִ���</span>");
                    },
                    success: function(result) {
                        if(result != "true"){
							$("#callinfo").html(errico+"�ύʧ�ܣ�"+result+"</span>");
					    }//ʧ��
						else
						{$("#callinfo").html(okico+"�ύ�ɹ�!</span>");}//�ɹ�
                    }
                });
		queryOrder();
    });
    $("#arr_content").blur(function(){
	   var Groupstxt=$("#arr_content").val().split('\n');
	   var Groupscount=Groupstxt.length;
	   //alert(Groupstxt[Groupstxt.length-1]);
	   if(Groupstxt[Groupstxt.length-1]){
         $("#Groupscount").html(Groupscount);
	   }
	   else{
		 $("#Groupscount").html(Groupscount-1);
	   }
	});
	$("#arr_content").keyup(function(){
	   var Groupstxt=$("#arr_content").val().split('\n');
	   var Groupscount=Groupstxt.length;
	   //alert(Groupstxt[Groupstxt.length-1]);
	   if(Groupstxt[Groupstxt.length-1]){
         $("#Groupscount").html(Groupscount);
	   }
	   else{
		 $("#Groupscount").html(Groupscount-1);
	   }
	});
//�����ύ
    $("#form_Groupscard button.green").click(function() {
	    var groupchannelId=$("#g_channelId").val();
		var groupcontent=$("#arr_content").val();
        if (groupcontent == '') {
            $("#arr_content").focus();
            $("#Groupsinfo").html(errico + "�����뿨��Ϣ</span>").show();ClearGroupsinfo();
            return false;
        };
		if (groupchannelId == '') {
            $("#Groupsinfo").html(errico + "ͨ����Ϣ��ȡʧ��</span>").show();ClearGroupsinfo();
            return false;
        };
        $("#Groupsinfo").css({color: "#666666"});
        $(this).attr("disabled", true);
		groupcontentarr=Cleartrim(groupcontent);
		var group_h=groupcontentarr.split('\n');
		var Groupbackmsg="";
		$("#Groupsinfo").html("").hide();ClearGroupsinfo();
		$("#arr_content").val("");
		for (var i=0;i<group_h.length;i++) {
			var groupcard=group_h[i].split(',');
			var ino=i+1;
			if(ino<10){ino="0"+ino;}
			if(groupcard.length!=3){
		      $("#Groupsinfo_"+ino).html(errico +"�� "+ino+" �� { ����Ϣ��ʽ����ȷ,������մ��� }</span>").show();
			}
			else
			{
			  var groupcardid=groupcard[0];
			  var groupcardpass=groupcard[1];
			  var grouppaymoney=groupcard[2];
			  if(ino<21){if(group_h[i]){Groupscard(ino,groupchannelId,groupcardid,groupcardpass,grouppaymoney);}}
			}
		}
		$("#form_Groupscard button.green").removeAttr("disabled");
		queryOrder();
    });
	 $('#form_Groupscard button[type="reset"]').click(function() {
        $("#form_Groupscard button.green").removeAttr("disabled");
		$("#arr_content").val("");
        $("#Groupsinfo").html("").hide();ClearGroupsinfo();
    });
})
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('4 Z(a){1Q(4(){D(a)},1P);$("#x"+a).P("6","6");$("#u"+a).1(7+"9</5>");$("#A"+a).1(7+"9</5>");$("#l"+a).1(7+"9</5>")}4 D(c){E="1s="+c+"&1r="+1o.1n();$.y({k:"h",1m:"H",1i:1c,m:\'H/\',n:E,o:4(a){$("#x"+c).p("6");$("#A"+c).1(a.1b);$("#u"+c).1(a.u);$("#l"+c).1(a.l)},q:4(a,b){$("#x"+c).p("6");$.1a({19:18,17:\'�����ȡʧ��,���Ե�����\'+b,15:v,14:v,13:4(){12.11.Y()},X:\'W\',V:\'U\',S:\'1p\'})}})}4 T(){$("#Q").P("6","6");$("#r").1("<8><i M=\'10\' L=\'K\'>"+7+"9..</5></i></8>");$.y({k:"h",J:"I/1",m:"h/",n:"",q:4(){$("#r").1("<8><i M=\'10\' L=\'K\'>�ύ���ִ���</i></8>")},o:4(a){G(a!=""){$("#Q").p("6");$("#r").1(a)}}})}4 16(b,c,d,e,f){$("#t"+b).1(7+"�����ύ..</5>").C();O="1d="+c+"&1e="+d+"&1f="+e+"&1g="+f+"";$.y({k:"h",J:"I/1",m:"1h/",n:O,q:4(){$("#N").1j({1k:"1l"});$("#N").1(F+"�ύ���ִ���</5>");B()},o:4(a){G(a!="v"){w=F+"�� "+b+" �� { ���ţ�"+d+" | �ύʧ�ܣ�"+a+" }</5>"}R{w=1q+"�� "+b+" �� { ���ţ�"+d+" | �ύ�ɹ�,���ڴ��� }</5>"}$("#z").1("").3();$("#t"+b).1("").3();$("#t"+b).1(w).C()}})}4 B(){$("#1t").1("").3();$("#1u").1("").3();$("#1v").1("").3();$("#1w").1("").3();$("#1x").1("").3();$("#1y").1("").3();$("#1z").1("").3();$("#1A").1("").3();$("#1B").1("").3();$("#1C").1("").3();$("#1D").1("").3();$("#1E").1("").3();$("#1F").1("").3();$("#1G").1("").3();$("#1H").1("").3();$("#1I").1("").3();$("#1J").1("").3();$("#1K").1("").3();$("#1L").1("").3();$("#1M").1("").3();$("#z").1("").3();$("#1N").1("0")}4 1O(a){a=a.j(/\\s{2,}/g,\',\');a=a.j(/��/g,\',\');a=a.j(/ /g,\',\');a=a.j(/[\\1R-\\1S]/g,\'\');1T a}',62,118,'|html||hide|function|span|disabled|ldico|tr|Loading||||||||get|td|replace|type|errorMsg|url|data|success|removeAttr|error|toporder||Groupsinfo_|paymoney|true|Groupbackmsg|sub|ajax|Groupsload|orderzt|ClearGroupsinfo|show|stopflag|postData|errico|if|json|text|contentType|nomsg|class|colspan|Groupsinfo|postorderdata|attr|queryorder|else|height|queryOrder|250px|width|warning|icon|reload|checkflag||location|window|ok|fixed|lock|Groupscard|content|lktitle|title|dialog|Success|10000|ChannelId|CardId|CardPass|FaceValue|set|timeout|css|color|red|dataType|random|Math|90px|okico|rnd|oid|Groupsinfo_01|Groupsinfo_02|Groupsinfo_03|Groupsinfo_04|Groupsinfo_05|Groupsinfo_06|Groupsinfo_07|Groupsinfo_08|Groupsinfo_09|Groupsinfo_10|Groupsinfo_11|Groupsinfo_12|Groupsinfo_13|Groupsinfo_14|Groupsinfo_15|Groupsinfo_16|Groupsinfo_17|Groupsinfo_18|Groupsinfo_19|Groupsinfo_20|Groupscount|Cleartrim|300|setTimeout|u4E00|u9FA5|return'.split('|'),0,{}))
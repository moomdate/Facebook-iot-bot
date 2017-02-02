var login = require("facebook-chat-api");
// Create simple echo bot 
login({email: "@gmail.com", password: ""}, function callback (err, api) {
    if(err) return console.error(err);
 
    api.setOptions({listenEvents: true});
  
    var stopListening = api.listen(function(err, event) {
        if(err) return console.error(err);
        switch(event.type) {
              case "message":
                if(event.body === 'exit') {
                  api.sendMessage("เออๆ", event.threadID);
                  return stopListening();
                }
                api.markAsRead(event.threadID, function(err) {
                  if(err) console.log(err);
                });
                  var commond = /^เปิดไฟให้(.*?)$/
                  var commond2 = event.body.match(commond);
                  var commodeled = /^เปิดไฟ(.*?)$/
                  var commodeled2 = event.body.match(commodeled);
                  var commodeled3 = /^ปิดไฟให้(.*?)$/
                  var commodeled4 = event.body.match(commodeled3);
                  var commodeled5 = /^ปิดไฟ(.*?)$/
                  var commodeled6 = event.body.match(commodeled5);
                  if(commond2){
                    var led = commond2[1];
                    var answ = [
                        'ไฟไหนหรอ','อะไรหว่ะ','โอ้ยหนอออ','ทำไมไม่เปิดเองวะ'
                    ]
                    var get_string = Math.floor(Math.random()*answ.length);
                    get_string = answ[get_string];
                    api.sendMessage(get_string, event.threadID);
                  }else if(event.body.indexOf("สัส")!=-1||event.body.indexOf("เหี้ย")!=-1||event.body.indexOf("ควาย")!=-1||event.body.indexOf("ฟาย")!=-1){
                  	api.sendMessage("พูดไม่เพราะเลย", event.threadID);
                  }
                  else if(event.body.indexOf("แงะ")!=-1||event.body.indexOf("แง่ะ")!=-1){
                  	api.sendMessage("ล้อเลียนหรอ ไอสัส", event.threadID);
                  }
                  else if(event.body.indexOf("ทำไร")!=-1){
                  	api.sendMessage("คิดถึงเป้อยู่ครับ", event.threadID);
                  }
                  else if(event.body.indexOf("ควย")!=-1||event.body.indexOf("kuy")!=-1||event.body.indexOf("8;p")!=-1){
                  	api.sendMessage("ใหญ่มากครับ ไม่อยากจะบอก", event.threadID);
                  }
                  else if(event.body.indexOf("ไปไหน")!=-1){
                  	api.sendMessage("เบิร์ดไปทำธุระครับ นี่บอท", event.threadID);
                  }
                  else if(event.body.indexOf("ชื่อไร")!=-1||event.body.indexOf("ชื่ออะไร")!=-1){
                  	api.sendMessage("ชื่อชาลีพุดครัช หาในกูเกิ้ลก็เจอ", event.threadID);
                  }
                  else if(event.body.indexOf("เบิ")!=-1){
                  	api.sendMessage("เบิร์ดไม่อยู่", event.threadID);
                  }
                  else if(event.body.indexOf("ไก่")!=-1){
                  	api.sendMessage("ไก่ไรละ เดี๋ยวตบ", event.threadID);
                  }
                  else if(event.body.indexOf("มาตอน")!=-1){
                  	api.sendMessage("สักพักแหละครับ", event.threadID);
                  }
                  else if(event.body.indexOf("hee")!=-1||event.body.indexOf("หี")!=-1||event.body.indexOf("ฮี")!=-1){
                  	api.sendMessage("เดี๋ยวก็สี่ซะหลอก", event.threadID);
                  }
                  else if(commodeled2){
                     var led = commodeled2[1];
                     if(led === 'ห้องแดง'||led === 'ห้องเขียว'||led === 'ห้องขาว'||led === 'ทั้งหมด'){
                      var led2 = led;
                      switch(led){
                        case 'ห้องแดง':
                        led = 'LED1';
                        break;
                        case 'ห้องเขียว':
                        led = 'LED2';
                        break;
                        case 'ห้องขาว':
                        led = 'LED3';
                        break;
                        case 'ทั้งหมด':
                        led = 'ALL';
                        break;
                      }
                      var request = require('request');
                      request('https://api.anto.io/channel/set/wmaxNM0MiwdU6e31UM8pdnv4CuyKyCjVjYnAj1sW/Fashi/'+led+'/1', function (error, response, body) {
                        if (!error && response.statusCode == 200) {
                          console.log(body) // Show the HTML for the Google homepage. 
                        }
                      })
                     api.sendMessage("โอเครเปิดไฟ"+ led2 + "ให้ละ", event.threadID);
                    }else{
                     api.sendMessage("มันมีไฟ"+ led + "ที่ไหนละ", event.threadID);
                     api.sendMessage("ไอฟาย..", event.threadID);
                    }
                  }else if(commodeled4){
                     var answ = [
                        'ปิดอีกละ','ไฟไรหว่ะ','แปปเล่นเกมอยู่','โอ้โห ไม่ปิดเองว่ะ','ปิดตรงไหน','อ่านหนังสืออยู่'
                    ]
                    var get_string = Math.floor(Math.random()*answ.length);
                    get_string = answ[get_string];
                    api.sendMessage(get_string, event.threadID);
                  }
                  else if(commodeled6){
                     var and = commodeled6[1];
                     if(and === 'ห้องแดง'||and === 'ห้องเขียว'||and === 'ห้อวขาว'||and === 'ทั้งหมด'){
                      var led2 = and;
                      switch(and){
                        case 'ห้องแดง':
                        and = 'LED1';
                        break;
                        case 'ห้องเขียว':
                        and = 'LED2';
                        break;
                        case 'ห้อวขาว':
                        and = 'LED3';
                        break;
                        case 'ทั้งหมด':
                        and = 'ALL';
                        break;
                      }
                      var request = require('request');
                      request('https://api.anto.io/channel/set/wmaxNM0MiwdU6e31UM8pdnv4CuyKyCjVjYnAj1sW/Fashi/'+and+'/0', function (error, response, body) {
                        if (!error && response.statusCode == 200) {
                          console.log(body) // Show the HTML for the Google homepage. 
                        }
                      })
                     api.sendMessage("โอเครปิดไฟ"+ led2 + "ให้ละ", event.threadID);
                    }else{
                         var answ = ['มันมีที่ไหนละ','กูไม่ได้เปิด','จะเล่นเกม','ปักหวาดแปป','โดนคิวเลยสัสเอ้ย','แล้วจะให้เปิดทำไมหว่ะ']
                        var get_string = Math.floor(Math.random()*answ.length);
                        get_string = answ[get_string];
                        api.sendMessage(get_string, event.threadID);
                    }
                  }
                  else if(event.body ==='โย่ว'||event.body ==='ทำไร'||event.body ==='เฮ็ดหยัง'||event.body ==='ไก่'||event.body ==='ไก่ๆ'){
                    var answ = [
                        'กันป้อมอยู่','อะไรหว่ะ','เล่นเกม','ปักหวาดแปป','โดนคิวเลยสัสเอ้ย','ตอบแชทสาวอยู่',
                        'อ่านหนังสืออยู่'
                    ]
                    var get_string = Math.floor(Math.random()*answ.length);
                    get_string = answ[get_string];
                    api.sendMessage(get_string, event.threadID);
                  }
                  else if(event.body ==='แต้งกิ้ว'||event.body ==='thx'||event.body ==='ขอบคุณ'||event.body ==='จุฟๆ'){
                    var answ = [
                        'บ่อเป็นหยัง','จร้าา','จุฟๆ','ตายคาบ้านเลยไอสัส'
                    ]
                    var get_string = Math.floor(Math.random()*answ.length);
                    get_string = answ[get_string];
                    api.sendMessage(get_string, event.threadID);
                  }
                  else{
                    /* var answ = [
                       'จร้าา','เดี๋ยวตบหัวหลุด','แง่ะ','เบิร์ดไม่อยู่นี่บอท','มีไรโทรเบอร์นี้ 0861708126'
                    ]
                    var get_string = Math.floor(Math.random()*answ.length);
                    get_string = answ[get_string];
                    api.sendMessage(get_string, event.threadID);*/
                    var request = require('request');
                      request('http://sandbox.api.simsimi.com/request.p?key=ba06ed29-8cbc-4f7d-849f-e95b15409874&lc=th&text=' + event.body + '&ft=0', function (error, response, body) {
                        if (!error && response.statusCode == 200) {
                         // console.log(body) // Show the HTML for the Google homepage. 
                         var getContact = JSON.parse(body);
                         var res = getContact.response;
                         api.sendMessage(res, event.threadID);
                        }

                      })
                  }
                 /*if(event.body === 'เปิดไฟให้หน่อย') {
                    api.sendMessage("ไฟไหนหรอ", event.threadID);
                  }else{
                    api.sendMessage("TEST BOT: " + event.body, event.threadID);
                  }*/
                  
                break;
              case "event":
                console.log(event);
                break;
        }
    });
});

var login = require("facebook-chat-api");
// Create simple echo bot 
login({email: "", password: ""}, function callback (err, api) {
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
                 /* var commodeled7 = /^ทำไร(.*?)$/
                  var commodeled8 = event.body.match(commodeled7);*/
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
               /*   else if(event.body.indexOf("ทำไร")!=-1){
                  	api.sendMessage("คิดถึงเป้อยู่ครับ", event.threadID);
                  }*/
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
                   else if(event.body.indexOf("ทำไรได้บ้าง")!=-1){
                    var answ = "---เปิด/ปิดไฟ---\n1.ห้องน้ำ\n2.ห้องนอน\n3.ห้องรับแขก\n4.ห้องนั่งเล่น\n5.ทั้งหมด";
                    api.sendMessage(answ,event.threadID);
                  }
                  else if(event.body.indexOf("มาตอน")!=-1){
                  	api.sendMessage("สักพักแหละครับ", event.threadID);
                  }
                  else if(event.body.indexOf("hee")!=-1||event.body.indexOf("หี")!=-1||event.body.indexOf("ฮี")!=-1){
                  	api.sendMessage("เดี๋ยวก็สี่ซะหลอก", event.threadID);
                  }
                  else if(commodeled2){
                     var led = commodeled2[1];
                     if(led === 'ห้องน้ำ'||led === 'ห้องนอน'||led === 'ห้องรับแขก'||led === 'ห้องนั่งเล่น'||led === 'ทั้งหมด'){
                      var led2 = led;
                      switch(led){
                        case 'ห้องน้ำ':
                        led = 'led0';
                        break;
                        case 'ห้องนอน':
                        led = 'led1';
                        break;
                        case 'ห้องรับแขก':
                        led = 'led2';
                        break;
                        case 'ห้องนั่งเล่น':
                        led = 'led3';
                        break;
                        case 'ทั้งหมด':
                        led = 'all';
                        break;
                      }
                      var request = require('request');
                      request('https://api.anto.io/channel/set/EXSw0Fo1hTBeox09lpa9Hpzb1YYjAJr0RZitputu/yuuibot/'+led+'/1', function (error, response, body) {
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
                     if(and === 'ห้องน้ำ'||and === 'ห้องนอน'||and === 'ห้องรับแขก'||and === 'ห้องนั่งเล่น'||and === 'ทั้งหมด'){
                      var led2 = and;
                      switch(and){
                        case 'ห้องน้ำ':
                        and = 'led0';
                        break;
                        case 'ห้องนอน':
                        and = 'led1';
                        break;
                        case 'ห้องรับแขก':
                        and = 'led2';
                        break;
                        case 'ห้องนั่งเล่น':
                        and = 'led3';
                        break;
                        case 'ทั้งหมด':
                        and = 'all';
                        break;
                      }
                      var request = require('request');
                      request('https://api.anto.io/channel/set/EXSw0Fo1hTBeox09lpa9Hpzb1YYjAJr0RZitputu/yuuibot/'+and+'/0', function (error, response, body) {
                      if (!error && response.statusCode == 200) {
                          console.log(body) // Show the HTML for the Google homepage. 
                        }
                      })
                     api.sendMessage("โอเครปิดไฟ"+ led2 + "ให้ละ", event.threadID);
                    }
                    else{
                         var answ = ['มันมีที่ไหนละ','กูไม่ได้เปิด','จะเล่นเกม','ปักหวาดแปป','โดนคิวเลยสัสเอ้ย','แล้วจะให้เปิดทำไมหว่ะ']
                        var get_string = Math.floor(Math.random()*answ.length);
                        get_string = answ[get_string];
                        api.sendMessage(get_string, event.threadID);
                    }
                  }
                 /* else if(event.body === 'ทำไรได้บ้าง'||event.body === 'ทำอะไรได้บ้าง'){
                      var answ = "-----เปิดไฟ----\n ห้องน้ำ\nห้องนอน\ห้องนั่งเล่น\ห้องรับแขก";
                      api.sendMessage(get_string, event.threadID);
                  }*/
                  else if(event.body ==='โย่ว'||event.body ==='ทำไร'||event.body ==='เฮ็ดหยัง'||event.body ==='ไก่'||event.body ==='ไก่ๆ'){
                    var answ = [
                        'ไม่บ๊อก หลอกให้งง','อะไรเหยอ','เล่นเกม','ปักหวาดแปป','โดนคิวเลยแง่','แชทสาวอยู่',
                        'อ่านหวิชา OS อยู่'
                    ]
                    var get_string = Math.floor(Math.random()*answ.length);
                    get_string = answ[get_string];
                    api.sendMessage(get_string, event.threadID);
                  }
                  else if(event.body ==='แต้งกิ้ว'||event.body ==='thx'||event.body ==='ขอบคุณ'||event.body ==='จุฟๆ'){
                    var answ = [
                        'บ่อเป็นหยัง','จร้าา','จุฟๆ','ไม่เป็นไร ได้AวิชาOSก็พอ'
                    ]
                    var get_string = Math.floor(Math.random()*answ.length);
                    get_string = answ[get_string];
                    api.sendMessage(get_string, event.threadID);
                  }
                  else{

                    
                  

                     var answ = [
                       'จร้าา','เดี๋ยวตบหัวหลุด','แง่ะ','โคราชหนาวแล้ว','ไม่บอก'
                    ]
                    var get_string = Math.floor(Math.random()*answ.length);
                    get_string = answ[get_string];
                    api.sendMessage(get_string, event.threadID);
                    /*var request = require('request');
                      request('http://sandbox.api.simsimi.com/request.p?key=ba06ed29-8cbc-4f7d-849f-e95b15409874&lc=th&text=' + event.body + '&ft=0', function (error, response, body) {
                        if (!error && response.statusCode == 200) {
                         // console.log(body) // Show the HTML for the Google homepage. 
                         var getContact = JSON.parse(body);
                         var res = getContact.response;
                         api.sendMessage(res, event.threadID);
                        }

                      })*/
                  }
                /* if(event.body === 'เปิดไฟให้หน่อย') {
                    api.sendMessage("ไฟไหนหรอ", event.threadID);
                  }else{
                    api.sendMessage("TEST BOT: " + event.body, event.threadID);
                  }
                  
               break;
              case "event":
                console.log(event);
                break;*/
        }
    });
});

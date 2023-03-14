


apiclient = (function(){

    postLogsProm= function(log){
        return new Promise((resolve) => {
            resolve($.ajax({
                type:'POST',
                url: "/logs",
                data: log,
                contentType: "text/html"
            }))
        })
    }

    getLogsFun = function(){
        var res = $.ajax({
            type:'GET',
            url: "/logs",
            async:false
        });
        console.log(res);
        return JSON.parse(res.responseText);
    }

    return{
        getLogs: function(){
            var logs = getLogsFun();
            var cont = $("#log-cont");
            let list = logs.map(function(l){
                return "<li>" + l +"</li>";
            });
            console.log(list);
            cont.html("");
            cont.append(list);

        },

        postLogs: function(){
            var newLog = $("#input").val();
            console.log(newLog + "log");
            postLogsProm(newLog).then(()=> {
                console.log(newLog + " Add")
            })
        }
    }
})();
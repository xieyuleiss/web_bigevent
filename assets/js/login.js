$(function () {
    //点击“去注册账号”的链接
    $('#link-reg').on('click', function () {
        $('.login-box').hide();
        $('.reg-box').show()
    })
    $('#link-login').on('click', function () {
        $('.reg-box').hide();
        $('.login-box').show()
    })

    //从layui中获取from对象
    var form = layui.form

    //通过form.verify()函数自定义效验规则
    form.verify({
        //自定义了讴歌叫做pwd效验规则
        'pwd': [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        //效验两次密码是否一致的规则
        repwd: function (value) {
            //通过形参拿到的是确认密码框中的内容
            //还需要拿到密码框的内容
            //然后进行一次等于的判断
            //如果判断失败，则ruturn一个提示消息即可
            var pwd = $('.reg-box [name=password]').val()
            if (pwd !== value) {
                return '两次密码不一致'
            }
        }
    })


    //监听注册表单的提交事件
    $('#form_reg').on('submit', function (e) {
        e.preventDefault()
        $.post('http://ajax.frontend.itheima.net/api/reguser', {
            username: $('#form_reg [name=username]').val(),
            password: $('#form_reg [name=password]').val(),
            function (res) {
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                console.log('注册成功');
            }
        })
    })


})
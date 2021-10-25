; (() => {
  const personal = {
    name: '',
    password: '',
    rePassword: '',
    age: 0,
    weight: 0,
    email: '',
  }
  let permission;

  const form = document.querySelector("form");

  init();

  function init () {
    bindEvent();
    Notification.requestPermission().then((res) => {
      permission = res === "granted";
    });
  }

  function bindEvent () {
    form.addEventListener('submit', submitHandler);
    form.addEventListener('input', inputHandler);
  }

  function submitHandler (e) {
    e.preventDefault();
    if (checkForm()) {
      if (permission) {
        const notification = new Notification('提交成功', {
          dir: 'ltr',
          lang: 'zh-CN',
          body: '表单提交成功',
        });
        setTimeout(() => notification.close(), 4000);
      } else {
        alert('提交成功');
      }
    } else {
      if (permission) {
        const notification = new Notification('提交失败', {
          dir: 'ltr',
          lang: 'zh-CN',
          body: '请检查表单，重新填写',
        });
        setTimeout(() => notification.close(), 2500);
      } else {
        alert('格式不正确');
      }
    }
  }

  function inputHandler (e) {
    const { id, value } = e.target;
    switch (id) {
      case 'name':
        personal.name = value;
        break;
      case 'password':
        personal.password = value;
        break;
      case 're-password':
        personal.rePassword = value;
        break;
      case 'age':
        personal.age = parseInt(value);
        break;
      case 'weight':
        personal.weight = parseInt(value);
        break;
      case 'email':
        personal.email = value;
        break;
      default:
        break;
    }
  }

  function checkForm () {
    const { name, password, rePassword, age, weight, email } = personal;
    return name.length >= 0
      && password.length >= 8
      && password === rePassword
      && age >= 18
      && weight >= 30
      && weight <= 150;
  }

})();
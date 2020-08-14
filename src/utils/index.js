//关于storage的获取
export function getStorage(name) {
  return sessionStorage.getItem(name)
}

export function setStorage(name, value) {
  let arr = ['number', 'string', 'boolean']
  if (typeof value === 'object'){
    sessionStorage.setItem(name, JSON.stringify(value))
  }else if (arr.indexOf(typeof value) > -1){
    sessionStorage.setItem(name, value)
  }
}

export function removeStorage(name) {
  sessionStorage.removeItem(name)
}

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export function formatTime(now) {
  if (now){
    const time = new Date(now)
    const year = time.getFullYear()
    let month = time.getMonth() + 1
    month = month < 10 ? ('0'+month) : month
    let day = time.getDate()
    day = day < 10 ? ('0'+day) : day
    let hour = time.getHours()
    let mm = ''
    if (parseInt(hour) >= 12){
      hour = hour - 12
      mm = '下午'
    }else {
      mm = '上午'
    }
    hour = hour < 10 ? '0'+hour : hour
    let minute = time.getMinutes()
    minute = minute < 10 ? '0'+minute : minute
    // let second = time.getSeconds()
    // second = second < 10 ? '0'+second : second
    return `${year}/${month}/${day} ${mm}${hour}:${minute}`
  }
}

export function myUploadFn(param) {
  const serverURL = '/manage/product/richtext_img_upload.do'
  const xhr = new XMLHttpRequest()
  const fd = new FormData()
  let alt

  const successFn = (response) => {
    // 假设服务端直接返回文件上传后的地址
    // 上传成功后调用param.success并传入上传后的文件地址
    const url = JSON.parse(xhr.responseText).file_path
    param.success({
      url: url,
      meta: {
        alt,
      }
    })
  }

  const progressFn = (event) => {
    // 上传进度发生变化时调用param.progress
    param.progress(event.loaded / event.total * 100)
  }

  const errorFn = (response) => {
    // 上传发生错误时调用param.error
    param.error({
      msg: 'unable to upload.'
    })
  }

  xhr.upload.addEventListener("progress", progressFn, false)
  xhr.addEventListener("load", successFn, false)
  xhr.addEventListener("error", errorFn, false)
  xhr.addEventListener("abort", errorFn, false)
  alt = param.file.name
  fd.append('name', param.file.name)
  fd.append('upload_file', param.file)
  xhr.open('POST', serverURL, true)
  xhr.send(fd)
}
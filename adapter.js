
//  ǰ�˺��������䷽ʽ ��������������   Զ�����Ӳο� https://image-1251917893.cos.ap-guangzhou.myqcloud.com/2020/a20200414privilege_peacegame/js/adapter.js


// 处理安全区域失效的Android异形�?
const handleAndroid = function() {
  if (typeof (navigator) == 'undefined' || typeof (navigator.userAgent) == 'undefined' || navigator.userAgent.indexOf('Android') == -1) {
    return
  }
  // 在这里查�? http://useragent.kuzhazha.com/Search/?keys=VIVO+Y81S
  var mobileModels = ['HONORLLD-AL20', 'Redmi 6 Pro', 'O11019']
  var isYixinAndroid = false
  for (var i = 0; i < mobileModels.length; i++) {
    if (navigator.userAgent.indexOf(mobileModels[i]) > -1) {
      isYixinAndroid = true
      break
    }
  }
  if (isYixinAndroid) {
    // 设置宽度�?100%
    var style = document.createElement('style')
    style.innerHTML = 'body{width:100%;}'
    document.head.appendChild(style)
    // 设置右边的padding和设置字�?
    var html = document.documentElement
    var w = html.clientWidth
    var h = html.clientHeight
    var fontSize = w > h ? w / 1334 * 100 : w / 750 * 100
    if (w > h) {
      var left = w / 20
      fontSize = w > h ? (w - left) / 1334 * 100 : w / 750 * 100
      if (typeof (window.orientation) !== 'undefined' && window.orientation == 90) {
        html.style.paddingLeft = left + 'px'
      } else {
        html.style.paddingLeft = '0px'
      }
    } else {
      html.style.paddingLeft = '0px'
    }
    html.style.fontSize = fontSize + 'px'
  }
}
  // 屏幕适应
  ; (function(win, doc) {
  if (!win.addEventListener) return

  function setFont() {
    var html = document.documentElement
    var cliWidth = html.clientWidth
    var w = document.documentElement.clientWidth
    var h = document.documentElement.clientHeight
    var val = 750
    if (w > h) {
      html.style.fontSize = (cliWidth / 1334) * 100 + 'px'
      console.log(html.clientHeight)
      if (html.clientWidth < 1024 && html.clientWidth >= 812) {
        html.style.fontSize = '50px'
      }
    } else {
      html.style.fontSize = 100 * (cliWidth / val) + 'px'
    }
    handleAndroid()
  }
  setFont()
  setTimeout(function() {
    setFont()
  }, 300)
  doc.addEventListener('DOMContentLoaded', setFont, false)
  win.addEventListener('resize', setFont, false)
  win.addEventListener('load', setFont, false)
})(window, document)
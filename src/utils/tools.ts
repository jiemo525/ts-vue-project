/**
 * @description 工具方法
 */

//判断是移动端还是 pc 端 ，true 表示是移动端，false 表示是 pc 端
export function isMobileOrPc() {
	if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		console.log('移动端');
		return true;
	} else {
		console.log('pc端');
		return false;
	}
}

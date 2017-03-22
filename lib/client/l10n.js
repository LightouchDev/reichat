/*!
 *  reichat client (l10n.js)
 *
 *  Copyright (c) 2015 Yuki KAN
 *  https://github.com/kanreisa
**/
/*jslint browser:true, nomen:true, plusplus:true, regexp:true, vars:true */
/*global flagrate, io */
window.addEventListener('DOMContentLoaded', function () {
	'use strict';

	var languages = (function () {

		var cl = document.querySelector('meta[http-equiv="Content-Language"]').getAttribute('content');

		var langs = cl.split(',');
		var i, l;
		for (i = 0, l = langs.length; i < l; i++) {
			langs[i] = langs[i].trim();
		}

		return langs;
	}());

	var language = (window.navigator.language || window.navigator.userLanguage).substr(0, 2);
	if (languages.indexOf(language) === -1) {
		language = languages[0];
	}

	var elements = document.querySelectorAll('*[lang]');
	var i, l;
	for (i = 0, l = elements.length; i < l; i++) {
		if (elements[i].getAttribute('lang') !== language) {
			flagrate.Element.hide(elements[i]);
		} else {
			flagrate.Element.addClassName(elements[i], 'visible');
		}
	}

	var dict = {};

	dict.ja = {
		'WARNING': '警告',
		'ARE YOU SURE?': '本当に?',
		'YOUR NAME': 'あなたの名前',
		'NAME': '名前',
		'JOIN': '参加',
		'SEND': '送信',
		'EXIT': '退出',
		'YES': 'はい',
		'CANCEL': 'キャンセル',
		'LOADING': 'ロード中',
		'READY': '準備完了',
		'SAVE': '保存',
		'SIZE': 'サイズ',
		'STABILIZE': 'ブレ補正',
		'LAYER': 'レイヤー',
		'OPACITY': '不透明度',
		'FREEHAND': 'フリーハンド',
		'BINARY PEN': '2値ペン',
		'BINARY PENCIL': '2値鉛筆',
		'BINARY BRUSH': '2値ブラシ',
		'BINARY WATER BRUSH': '2値水彩ブラシ',
		'BINARY MARKER': '2値マーカー',
		'BINARY ERASER': '2値消しゴム',
		'PEN': 'ペン',
		'PENCIL': '鉛筆',
		'BRUSH': 'ブラシ',
		'WATER BRUSH': '水彩ブラシ',
		'MARKER': 'マーカー',
		'ERASER': '消しゴム',
		'RECTANGULAR COPY': '長方形コピー',
		'RECTANGULAR MOVE': '長方形移動',
		'RECTANGULAR FILL': '長方形塗りつぶし',
		'RECTANGULAR ERASER': '長方形消しゴム',
		'ENTER KEY TO FOCUS HERE': 'Enter キーでここにフォーカス',
		'CLEAR CANVAS': 'キャンバスをクリア',
		'ARE YOU SURE YOU WANT TO CLEAR THE CANVAS?': 'キャンバスをクリアしてもよろしいですか?'
	};

	dict.ko = {
		'WARNING': '경고',
		'ARE YOU SURE?': '정말?',
		'YOUR NAME': '당신의 이름',
		'NAME': '이름',
		'JOIN': '참가',
		'SEND': '보내',
		'EXIT': '퇴출',
		'YES': 'Yes',
		'CANCEL': '캔슬',
		'LOADING': '로드 중',
		'READY': '준비 완료',
		'SAVE': '저장',
		'SIZE': '사이즈',
		'STABILIZE': '손떨림 보정',
		'LAYER': '레이어',
		'OPACITY': '불투명도',
		'FREEHAND': '자유',
		'BINARY PEN': '바이너리 펜',
		'BINARY PENCIL': '바이너리 연필',
		'BINARY BRUSH': '바이너리 브러쉬',
		'BINARY WATER BRUSH': '바이너리 수채화 브러쉬',
		'BINARY MARKER': '바이너리 마커',
		'BINARY ERASER': '바이너리 지우개',
		'PEN': '펜',
		'PENCIL': '연필',
		'BRUSH': '브러쉬',
		'WATER BRUSH': '수채화 브러쉬',
		'MARKER': '마커',
		'ERASER': '지우개',
		'RECTANGULAR COPY': '사각형 카피',
		'RECTANGULAR MOVE': '사각형 이동',
		'RECTANGULAR FILL': '사각형 채우기',
		'RECTANGULAR ERASER': '사각형 지우개',
		'ENTER KEY TO FOCUS HERE': 'Enter 키를 누르면 여기에 포커스합니다',
		'CLEAR CANVAS': '캔버스를 클리어',
		'ARE YOU SURE YOU WANT TO CLEAR THE CANVAS?': '캔버스를 클리어 하시겠습니까?'
	};

  dict.zh = {
		'WARNING': '警告',
		'ARE YOU SURE?': '確定嗎？',
		'YOUR NAME': '你的名字',
		'NAME': '名字',
		'JOIN': '加入',
		'SEND': '送出',
		'EXIT': '退出',
		'YES': '確定',
		'CANCEL': '取消',
		'LOADING': '載入中',
		'READY': '準備完畢',
		'SAVE': '儲存',
		'SIZE': '大小',
		'STABILIZE': '防手震',
		'LAYER': '圖層',
		'OPACITY': '不透明度',
		'FREEHAND': '自由塗抹',
		'BINARY PEN': '2值原子筆',
		'BINARY PENCIL': '2值鉛筆',
		'BINARY BRUSH': '2值筆刷',
		'BINARY WATER BRUSH': '2值水彩刷',
		'BINARY MARKER': '2值麥克筆',
		'BINARY ERASER': '2值橡皮擦',
		'PEN': '原子筆',
		'PENCIL': '鉛筆',
		'BRUSH': '筆刷',
		'WATER BRUSH': '水彩刷',
		'MARKER': '麥克筆',
		'ERASER': '橡皮擦',
		'RECTANGULAR COPY': '長方形複製',
		'RECTANGULAR MOVE': '長方形移動',
		'RECTANGULAR FILL': '長方形填色',
		'RECTANGULAR ERASER': '長方形橡皮擦',
		'ENTER KEY TO FOCUS HERE': '按下 Enter 鍵開始聊天',
		'CLEAR CANVAS': '清除畫布',
		'ARE YOU SURE YOU WANT TO CLEAR THE CANVAS?': '真的確定要清除畫布嗎？'
	};

	String.prototype.__ = function () {

		var str = this.toString();
		if (dict[language]) {
			str = dict[language][str.toUpperCase()] || str;
		}

		var words = arguments;

		str = str.replace(/\{[0-9]+\}/, function (a) {

			var key = a;

			return words[parseInt(key.match(/\{([0-9]+)\}/)[1], 10)].__();
		});

		return str;
	};
});

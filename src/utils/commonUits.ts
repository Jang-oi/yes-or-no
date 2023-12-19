import {MenuTypes} from "../types/menuTypes";

export function openNewTab(url: string) {
    const newTab = window.open(url, '_blank');
    if (newTab) {
        newTab.focus();
    } else {
        console.error('팝업이 차단되었거나 새 탭을 열 수 없습니다.');
    }
}

export function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export const menuData: MenuTypes[] = [
    {menu: '홈', url: '/'},
    {menu: '로또', childMenu: ['당첨번호', '당첨내역조회'], childUrl: ['/lotto/winning', '/lotto/search']},
    {menu: '공모주', url: '/stock'},
    {menu: '점심', childMenu: ['추천식당', '설정'], childUrl: ['/lunch/recommended', '/lunch/setting']}
];
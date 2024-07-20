import {loginData} from './authPage/login/login'
import {signinData} from './authPage/signin/signin'
import {profileData} from './profilePages/profile'
import {chatData} from './chat/chatData.ts'

const indexData = {
    title: 'Index',
    navLinks: [
        {link: '/pages/authPage/login/login', name: 'Авторизация1'},
        {link: '/pages/authPage/signin/signin', name: 'Регистрация'},
        {link: '/pages/errorPage/404', name: '404'},
        {link: '/pages/errorPage/500', name: '500'},
        {link: '/pages/profilePages/profile', name: 'Профиль'},
        {link: '/pages/profilePages/profileChangeInfo', name: 'Изменение профиля'},
        {link: '/pages/profilePages/profileChangePassword', name: 'Изменение пароля'},
        {link: '/pages/chat/chat', name: 'Чат'},
    ],
}

export const pageData = {
    '/index.html': indexData,
    '/pages/authPage/login/login.html': loginData,
    '/pages/authPage/signin/signin.html': signinData,
    '/pages/profilePages/profile.html': profileData.base,
    '/pages/profilePages/profileChangeInfo.html': profileData.changeInfo,
    '/pages/profilePages/profileChangePassword.html': profileData.changePassword,
    '/pages/chat/chat.html': chatData,
}

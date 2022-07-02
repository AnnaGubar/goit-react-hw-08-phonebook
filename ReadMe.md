1. Подключаем маршрутизацию BrowserRouter в index.js => создание навигации в
   App.js

2. Подключение Provider PersistGate в index.js

3. Создание store.js => store/middleware/persistor

4. Создаем навигацию приложения => AppBar (HomeNav AuthNav UserMenu)

5. Cозданием страницы HomePage PhonebookPage LoginPage RegisterPage =>
   добавление валидации формам

6. Создание

- auth-slice (работа со state - createSlice/reduser)
- auth-operations (запросы createAsyncThunk/axios)

7. Получаем данные с форм и отправляем в auth-operations.js для запроса на
   бекенд

- RegisterPage
  - onSubmit => dispatch(register) => запрос auth-operations(register) =>
    auth-slice(обновление state)
- LoginPage
  - onSubmit => dispatch(logIn) => запрос auth-operations(logIn) =>
    auth-slice(обновление state)

8. Реализация логики отображения навигации:

- если пользователь залогинен - показывать UseMenu и скрывать AuthNav
- если разлогинен - показывать AuthNav и скрывать UseMenu
  `const isLoggedIn = useSelector(state => state.auth.isLoggedIn);`

9. В UseMenu создаем logOut

- действие по клику - анонимная функция
  ` <button type="button" onClick={() => dispatch(authOperations.logOut())}>`
- что бы разлогинить необходмимо в auth-operations удалить токен залогиневшегося
  пользователя - token.unset()

10. Добавление логики PhoneBookPage => дробление на компоненты, создание
    contacts-operation contacts-slice

11. Что бы при перезагрузке страницы не пропадали данные
    регистрации/залогинивания нужно записать токен в персист

- store.js =>
  ` const authPersistConfig = { key: 'auth', storage, whitelist: ['token'], };`
- auth-operation.js => создание запроса `fetchCurrentUser`
- thunkAPI.getState() - возвр. все редакс состояние
- App.js =>
  `useEffect(() => { dispatch(authOperations.fetchCurrentUser()); }, [dispatch]);`
- auth-slice.js =>
  `[authOperations.fetchCurrentUser.fulfilled](state, action) { state.user = action.payload; state.isLoggedIn = true;}`

12. Создание PrivateRoute и PublicRoute => создаем js файлы и затаскиваем в App.js 

13. Что бы при перезагрузке не прыгала разметка -> реализовано isFetchingCurrentUser в auth-slice.js

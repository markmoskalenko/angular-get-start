# Donbilet

Проект для..

## Режим разработчика

`ng serve --open`

## Генерация новой страницы

##### Генерация модуля страницы
`ng g module pages/main`
где main название страницы

##### Генерация компонента страницы
`ng g component pages/main` 
где main название страницы


## Генерация UI компонентов

##### Генерация модуля страницы

module-name и component-name всегда одинаковые 

`ng g module ui/module-name`
где main название страницы

##### Генерация компонента страницы
`ng g component ui/component-name` 
где main название страницы

После генерации в модуле компонента обязательно добавить секцию export с названием компонента

```
@NgModule({
  declarations: [LogoComponent],
  exports: [LogoComponent],
  imports: [
    CommonModule
  ]
})
```

После того как сделали модуль компонента его нужно подключить на нужной странице или в нужном зависимом компоненте. Это делается через секцию import модуля

Вот пример подключения модулей на странице main
```
@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FilterModule, <---
    HeaderModule, <---
    FooterModule, <---
  ]
})
```

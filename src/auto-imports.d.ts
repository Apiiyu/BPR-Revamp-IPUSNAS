/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated by unplugin-auto-import
export {}
declare global {
  const AppLayoutDefault: typeof import('./app/components/layouts/index')['AppLayoutDefault']
  const AppLayoutEmpty: typeof import('./app/components/layouts/index')['AppLayoutEmpty']
  const DEFAULT_CURRENCY_OPTIONS: typeof import('./app/constants/useText.constant')['DEFAULT_CURRENCY_OPTIONS']
  const EToastPosition: typeof import('./app/constants/toast.constant')['EToastPosition']
  const EToastType: typeof import('./app/constants/toast.constant')['EToastType']
  const EffectScope: typeof import('vue')['EffectScope']
  const LAYOUT_AUTHENTICATION: typeof import('./app/constants/layout.constant')['LAYOUT_AUTHENTICATION']
  const LAYOUT_DEFAULT: typeof import('./app/constants/layout.constant')['LAYOUT_DEFAULT']
  const LAYOUT_EMPTY: typeof import('./app/constants/layout.constant')['LAYOUT_EMPTY']
  const LAYOUT_OPTIONS: typeof import('./app/constants/layout.constant')['LAYOUT_OPTIONS']
  const LAYOUT_PUBLIC: typeof import('./app/constants/layout.constant')['LAYOUT_PUBLIC']
  const VALIDATION_MESSAGE: typeof import('./app/constants/validation.constant')['VALIDATION_MESSAGE']
  const computed: typeof import('vue')['computed']
  const createApp: typeof import('vue')['createApp']
  const customRef: typeof import('vue')['customRef']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const effectScope: typeof import('vue')['effectScope']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const h: typeof import('vue')['h']
  const inject: typeof import('vue')['inject']
  const isProxy: typeof import('vue')['isProxy']
  const isReactive: typeof import('vue')['isReactive']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const markRaw: typeof import('vue')['markRaw']
  const nextTick: typeof import('vue')['nextTick']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeRouteLeave: typeof import('vue-router')['onBeforeRouteLeave']
  const onBeforeRouteUpdate: typeof import('vue-router')['onBeforeRouteUpdate']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onMounted: typeof import('vue')['onMounted']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const provide: typeof import('vue')['provide']
  const reactive: typeof import('vue')['reactive']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const replaceParams: typeof import('./app/helpers/replace-parameters.helper')['replaceParams']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const toRaw: typeof import('vue')['toRaw']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const toValue: typeof import('vue')['toValue']
  const triggerRef: typeof import('vue')['triggerRef']
  const unref: typeof import('vue')['unref']
  const useAttrs: typeof import('vue')['useAttrs']
  const useBindStateForm: typeof import('./app/composables/useValidateForm')['useBindStateForm']
  const useCamelCase: typeof import('./app/composables/useText')['useCamelCase']
  const useCapitalize: typeof import('./app/composables/useText')['useCapitalize']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVars: typeof import('vue')['useCssVars']
  const useCurrencyFormat: typeof import('./app/composables/useText')['useCurrencyFormat']
  const useHttpAbort: typeof import('./app/composables/useHttpAbort')['useHttpAbort']
  const useLink: typeof import('vue-router')['useLink']
  const useListenerForm: typeof import('./app/composables/useValidateForm')['useListenerForm']
  const useParseStringHtmlToText: typeof import('./app/composables/useText')['useParseStringHtmlToText']
  const useRemoveSpace: typeof import('./app/composables/useText')['useRemoveSpace']
  const useRemoveSpecialCharacter: typeof import('./app/composables/useText')['useRemoveSpecialCharacter']
  const useRoute: typeof import('vue-router')['useRoute']
  const useRouter: typeof import('vue-router')['useRouter']
  const useSlots: typeof import('vue')['useSlots']
  const watch: typeof import('vue')['watch']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
}
// for type re-export
declare global {
  // @ts-ignore
  export type { Component, ComponentPublicInstance, ComputedRef, ExtractDefaultPropTypes, ExtractPropTypes, ExtractPublicPropTypes, InjectionKey, PropType, Ref, VNode, WritableComputedRef } from 'vue'
  import('vue')
  // @ts-ignore
  export type { LAYOUT_OPTIONS, LAYOUT_OPTIONS } from './app/constants/layout.constant'
  import('./app/constants/layout.constant')
  // @ts-ignore
  export type { EToastType, EToastPosition } from './app/constants/toast.constant'
  import('./app/constants/toast.constant')
}
// for vue template auto import
import { UnwrapRef } from 'vue'
declare module 'vue' {
  interface GlobalComponents {}
  interface ComponentCustomProperties {
    readonly DEFAULT_CURRENCY_OPTIONS: UnwrapRef<typeof import('./app/constants/useText.constant')['DEFAULT_CURRENCY_OPTIONS']>
    readonly EToastPosition: UnwrapRef<typeof import('./app/constants/toast.constant')['EToastPosition']>
    readonly EToastType: UnwrapRef<typeof import('./app/constants/toast.constant')['EToastType']>
    readonly EffectScope: UnwrapRef<typeof import('vue')['EffectScope']>
    readonly LAYOUT_AUTHENTICATION: UnwrapRef<typeof import('./app/constants/layout.constant')['LAYOUT_AUTHENTICATION']>
    readonly LAYOUT_DEFAULT: UnwrapRef<typeof import('./app/constants/layout.constant')['LAYOUT_DEFAULT']>
    readonly LAYOUT_EMPTY: UnwrapRef<typeof import('./app/constants/layout.constant')['LAYOUT_EMPTY']>
    readonly LAYOUT_OPTIONS: UnwrapRef<typeof import('./app/constants/layout.constant')['LAYOUT_OPTIONS']>
    readonly LAYOUT_PUBLIC: UnwrapRef<typeof import('./app/constants/layout.constant')['LAYOUT_PUBLIC']>
    readonly VALIDATION_MESSAGE: UnwrapRef<typeof import('./app/constants/validation.constant')['VALIDATION_MESSAGE']>
    readonly computed: UnwrapRef<typeof import('vue')['computed']>
    readonly createApp: UnwrapRef<typeof import('vue')['createApp']>
    readonly customRef: UnwrapRef<typeof import('vue')['customRef']>
    readonly defineAsyncComponent: UnwrapRef<typeof import('vue')['defineAsyncComponent']>
    readonly defineComponent: UnwrapRef<typeof import('vue')['defineComponent']>
    readonly effectScope: UnwrapRef<typeof import('vue')['effectScope']>
    readonly getCurrentInstance: UnwrapRef<typeof import('vue')['getCurrentInstance']>
    readonly getCurrentScope: UnwrapRef<typeof import('vue')['getCurrentScope']>
    readonly h: UnwrapRef<typeof import('vue')['h']>
    readonly inject: UnwrapRef<typeof import('vue')['inject']>
    readonly isProxy: UnwrapRef<typeof import('vue')['isProxy']>
    readonly isReactive: UnwrapRef<typeof import('vue')['isReactive']>
    readonly isReadonly: UnwrapRef<typeof import('vue')['isReadonly']>
    readonly isRef: UnwrapRef<typeof import('vue')['isRef']>
    readonly markRaw: UnwrapRef<typeof import('vue')['markRaw']>
    readonly nextTick: UnwrapRef<typeof import('vue')['nextTick']>
    readonly onActivated: UnwrapRef<typeof import('vue')['onActivated']>
    readonly onBeforeMount: UnwrapRef<typeof import('vue')['onBeforeMount']>
    readonly onBeforeRouteLeave: UnwrapRef<typeof import('vue-router')['onBeforeRouteLeave']>
    readonly onBeforeRouteUpdate: UnwrapRef<typeof import('vue-router')['onBeforeRouteUpdate']>
    readonly onBeforeUnmount: UnwrapRef<typeof import('vue')['onBeforeUnmount']>
    readonly onBeforeUpdate: UnwrapRef<typeof import('vue')['onBeforeUpdate']>
    readonly onDeactivated: UnwrapRef<typeof import('vue')['onDeactivated']>
    readonly onErrorCaptured: UnwrapRef<typeof import('vue')['onErrorCaptured']>
    readonly onMounted: UnwrapRef<typeof import('vue')['onMounted']>
    readonly onRenderTracked: UnwrapRef<typeof import('vue')['onRenderTracked']>
    readonly onRenderTriggered: UnwrapRef<typeof import('vue')['onRenderTriggered']>
    readonly onScopeDispose: UnwrapRef<typeof import('vue')['onScopeDispose']>
    readonly onServerPrefetch: UnwrapRef<typeof import('vue')['onServerPrefetch']>
    readonly onUnmounted: UnwrapRef<typeof import('vue')['onUnmounted']>
    readonly onUpdated: UnwrapRef<typeof import('vue')['onUpdated']>
    readonly provide: UnwrapRef<typeof import('vue')['provide']>
    readonly reactive: UnwrapRef<typeof import('vue')['reactive']>
    readonly readonly: UnwrapRef<typeof import('vue')['readonly']>
    readonly ref: UnwrapRef<typeof import('vue')['ref']>
    readonly replaceParams: UnwrapRef<typeof import('./app/helpers/replace-parameters.helper')['replaceParams']>
    readonly resolveComponent: UnwrapRef<typeof import('vue')['resolveComponent']>
    readonly shallowReactive: UnwrapRef<typeof import('vue')['shallowReactive']>
    readonly shallowReadonly: UnwrapRef<typeof import('vue')['shallowReadonly']>
    readonly shallowRef: UnwrapRef<typeof import('vue')['shallowRef']>
    readonly toRaw: UnwrapRef<typeof import('vue')['toRaw']>
    readonly toRef: UnwrapRef<typeof import('vue')['toRef']>
    readonly toRefs: UnwrapRef<typeof import('vue')['toRefs']>
    readonly toValue: UnwrapRef<typeof import('vue')['toValue']>
    readonly triggerRef: UnwrapRef<typeof import('vue')['triggerRef']>
    readonly unref: UnwrapRef<typeof import('vue')['unref']>
    readonly useAttrs: UnwrapRef<typeof import('vue')['useAttrs']>
    readonly useBindStateForm: UnwrapRef<typeof import('./app/composables/useValidateForm')['useBindStateForm']>
    readonly useCamelCase: UnwrapRef<typeof import('./app/composables/useText')['useCamelCase']>
    readonly useCapitalize: UnwrapRef<typeof import('./app/composables/useText')['useCapitalize']>
    readonly useCssModule: UnwrapRef<typeof import('vue')['useCssModule']>
    readonly useCssVars: UnwrapRef<typeof import('vue')['useCssVars']>
    readonly useCurrencyFormat: UnwrapRef<typeof import('./app/composables/useText')['useCurrencyFormat']>
    readonly useHttpAbort: UnwrapRef<typeof import('./app/composables/useHttpAbort')['useHttpAbort']>
    readonly useLink: UnwrapRef<typeof import('vue-router')['useLink']>
    readonly useListenerForm: UnwrapRef<typeof import('./app/composables/useValidateForm')['useListenerForm']>
    readonly useParseStringHtmlToText: UnwrapRef<typeof import('./app/composables/useText')['useParseStringHtmlToText']>
    readonly useRemoveSpace: UnwrapRef<typeof import('./app/composables/useText')['useRemoveSpace']>
    readonly useRemoveSpecialCharacter: UnwrapRef<typeof import('./app/composables/useText')['useRemoveSpecialCharacter']>
    readonly useRoute: UnwrapRef<typeof import('vue-router')['useRoute']>
    readonly useRouter: UnwrapRef<typeof import('vue-router')['useRouter']>
    readonly useSlots: UnwrapRef<typeof import('vue')['useSlots']>
    readonly watch: UnwrapRef<typeof import('vue')['watch']>
    readonly watchEffect: UnwrapRef<typeof import('vue')['watchEffect']>
    readonly watchPostEffect: UnwrapRef<typeof import('vue')['watchPostEffect']>
    readonly watchSyncEffect: UnwrapRef<typeof import('vue')['watchSyncEffect']>
  }
}
declare module '@vue/runtime-core' {
  interface GlobalComponents {}
  interface ComponentCustomProperties {
    readonly DEFAULT_CURRENCY_OPTIONS: UnwrapRef<typeof import('./app/constants/useText.constant')['DEFAULT_CURRENCY_OPTIONS']>
    readonly EToastPosition: UnwrapRef<typeof import('./app/constants/toast.constant')['EToastPosition']>
    readonly EToastType: UnwrapRef<typeof import('./app/constants/toast.constant')['EToastType']>
    readonly EffectScope: UnwrapRef<typeof import('vue')['EffectScope']>
    readonly LAYOUT_AUTHENTICATION: UnwrapRef<typeof import('./app/constants/layout.constant')['LAYOUT_AUTHENTICATION']>
    readonly LAYOUT_DEFAULT: UnwrapRef<typeof import('./app/constants/layout.constant')['LAYOUT_DEFAULT']>
    readonly LAYOUT_EMPTY: UnwrapRef<typeof import('./app/constants/layout.constant')['LAYOUT_EMPTY']>
    readonly LAYOUT_OPTIONS: UnwrapRef<typeof import('./app/constants/layout.constant')['LAYOUT_OPTIONS']>
    readonly LAYOUT_PUBLIC: UnwrapRef<typeof import('./app/constants/layout.constant')['LAYOUT_PUBLIC']>
    readonly VALIDATION_MESSAGE: UnwrapRef<typeof import('./app/constants/validation.constant')['VALIDATION_MESSAGE']>
    readonly computed: UnwrapRef<typeof import('vue')['computed']>
    readonly createApp: UnwrapRef<typeof import('vue')['createApp']>
    readonly customRef: UnwrapRef<typeof import('vue')['customRef']>
    readonly defineAsyncComponent: UnwrapRef<typeof import('vue')['defineAsyncComponent']>
    readonly defineComponent: UnwrapRef<typeof import('vue')['defineComponent']>
    readonly effectScope: UnwrapRef<typeof import('vue')['effectScope']>
    readonly getCurrentInstance: UnwrapRef<typeof import('vue')['getCurrentInstance']>
    readonly getCurrentScope: UnwrapRef<typeof import('vue')['getCurrentScope']>
    readonly h: UnwrapRef<typeof import('vue')['h']>
    readonly inject: UnwrapRef<typeof import('vue')['inject']>
    readonly isProxy: UnwrapRef<typeof import('vue')['isProxy']>
    readonly isReactive: UnwrapRef<typeof import('vue')['isReactive']>
    readonly isReadonly: UnwrapRef<typeof import('vue')['isReadonly']>
    readonly isRef: UnwrapRef<typeof import('vue')['isRef']>
    readonly markRaw: UnwrapRef<typeof import('vue')['markRaw']>
    readonly nextTick: UnwrapRef<typeof import('vue')['nextTick']>
    readonly onActivated: UnwrapRef<typeof import('vue')['onActivated']>
    readonly onBeforeMount: UnwrapRef<typeof import('vue')['onBeforeMount']>
    readonly onBeforeRouteLeave: UnwrapRef<typeof import('vue-router')['onBeforeRouteLeave']>
    readonly onBeforeRouteUpdate: UnwrapRef<typeof import('vue-router')['onBeforeRouteUpdate']>
    readonly onBeforeUnmount: UnwrapRef<typeof import('vue')['onBeforeUnmount']>
    readonly onBeforeUpdate: UnwrapRef<typeof import('vue')['onBeforeUpdate']>
    readonly onDeactivated: UnwrapRef<typeof import('vue')['onDeactivated']>
    readonly onErrorCaptured: UnwrapRef<typeof import('vue')['onErrorCaptured']>
    readonly onMounted: UnwrapRef<typeof import('vue')['onMounted']>
    readonly onRenderTracked: UnwrapRef<typeof import('vue')['onRenderTracked']>
    readonly onRenderTriggered: UnwrapRef<typeof import('vue')['onRenderTriggered']>
    readonly onScopeDispose: UnwrapRef<typeof import('vue')['onScopeDispose']>
    readonly onServerPrefetch: UnwrapRef<typeof import('vue')['onServerPrefetch']>
    readonly onUnmounted: UnwrapRef<typeof import('vue')['onUnmounted']>
    readonly onUpdated: UnwrapRef<typeof import('vue')['onUpdated']>
    readonly provide: UnwrapRef<typeof import('vue')['provide']>
    readonly reactive: UnwrapRef<typeof import('vue')['reactive']>
    readonly readonly: UnwrapRef<typeof import('vue')['readonly']>
    readonly ref: UnwrapRef<typeof import('vue')['ref']>
    readonly replaceParams: UnwrapRef<typeof import('./app/helpers/replace-parameters.helper')['replaceParams']>
    readonly resolveComponent: UnwrapRef<typeof import('vue')['resolveComponent']>
    readonly shallowReactive: UnwrapRef<typeof import('vue')['shallowReactive']>
    readonly shallowReadonly: UnwrapRef<typeof import('vue')['shallowReadonly']>
    readonly shallowRef: UnwrapRef<typeof import('vue')['shallowRef']>
    readonly toRaw: UnwrapRef<typeof import('vue')['toRaw']>
    readonly toRef: UnwrapRef<typeof import('vue')['toRef']>
    readonly toRefs: UnwrapRef<typeof import('vue')['toRefs']>
    readonly toValue: UnwrapRef<typeof import('vue')['toValue']>
    readonly triggerRef: UnwrapRef<typeof import('vue')['triggerRef']>
    readonly unref: UnwrapRef<typeof import('vue')['unref']>
    readonly useAttrs: UnwrapRef<typeof import('vue')['useAttrs']>
    readonly useBindStateForm: UnwrapRef<typeof import('./app/composables/useValidateForm')['useBindStateForm']>
    readonly useCamelCase: UnwrapRef<typeof import('./app/composables/useText')['useCamelCase']>
    readonly useCapitalize: UnwrapRef<typeof import('./app/composables/useText')['useCapitalize']>
    readonly useCssModule: UnwrapRef<typeof import('vue')['useCssModule']>
    readonly useCssVars: UnwrapRef<typeof import('vue')['useCssVars']>
    readonly useCurrencyFormat: UnwrapRef<typeof import('./app/composables/useText')['useCurrencyFormat']>
    readonly useHttpAbort: UnwrapRef<typeof import('./app/composables/useHttpAbort')['useHttpAbort']>
    readonly useLink: UnwrapRef<typeof import('vue-router')['useLink']>
    readonly useListenerForm: UnwrapRef<typeof import('./app/composables/useValidateForm')['useListenerForm']>
    readonly useParseStringHtmlToText: UnwrapRef<typeof import('./app/composables/useText')['useParseStringHtmlToText']>
    readonly useRemoveSpace: UnwrapRef<typeof import('./app/composables/useText')['useRemoveSpace']>
    readonly useRemoveSpecialCharacter: UnwrapRef<typeof import('./app/composables/useText')['useRemoveSpecialCharacter']>
    readonly useRoute: UnwrapRef<typeof import('vue-router')['useRoute']>
    readonly useRouter: UnwrapRef<typeof import('vue-router')['useRouter']>
    readonly useSlots: UnwrapRef<typeof import('vue')['useSlots']>
    readonly watch: UnwrapRef<typeof import('vue')['watch']>
    readonly watchEffect: UnwrapRef<typeof import('vue')['watchEffect']>
    readonly watchPostEffect: UnwrapRef<typeof import('vue')['watchPostEffect']>
    readonly watchSyncEffect: UnwrapRef<typeof import('vue')['watchSyncEffect']>
  }
}
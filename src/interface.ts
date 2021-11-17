export interface Constructable<T> {
	new (...args: any): T
}

export interface Component {
	afterDestroy: () => void
	afterRender: () => void
	beforeDestroy: () => void
	beforeRender: () => void
	getStore: (key: string) => object | undefined | Map<string, object>
	render: () => void
	setStore: (data: any) => void
}

export interface interfaceLocationInstances {
	[key: string]: any
}

export interface Route {
	component: Constructable<Component> | (() => void) | any // Multi types with constructor and function fails
	path: string
	props: any
}

export interface RouteData {
	component: any | null
	instance: any
	interfaceType: string | null
	isComponent: boolean
	isFunction: boolean
	path: string
	props: any
}

export interface Attributes {
	[key: string]: string
}

export type onRouteChangeFunction = ({
	currentPath,
	previousPath
}: {
	currentPath: string
	previousPath: null | string
}) => void

export type privateGetExternalStore = (key: string, path: string) => object | undefined | null

export interface ComponentInjection {
	__getExternalStore: privateGetExternalStore
	getPath: () => null | string
	navigate: (path: string) => void
}

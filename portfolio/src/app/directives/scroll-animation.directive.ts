import {
    AfterViewInit,
    Directive,
    ElementRef,
    EventEmitter,
    OnDestroy,
    Output,
} from '@angular/core'
import { fromEvent, startWith, Subscription } from 'rxjs'

@Directive({
    selector: '[scrollAnimation]',
})
export class ScrollAnimationDirective implements AfterViewInit, OnDestroy {
    @Output() appear: EventEmitter<void>

    elementPos: number = 0
    elementHeight: number = 0

    scrollPos: number = 0
    windowHeight: number = 0

    subscriptionScroll: Subscription | undefined
    subscriptionResize: Subscription | undefined

    constructor(private el: ElementRef<HTMLElement>) {
        this.appear = new EventEmitter<void>()
    }

    saveDimensions() {
        this.elementPos = this.getOffsetTop(this.el.nativeElement)
        this.elementHeight = this.el.nativeElement.offsetHeight
        this.windowHeight = window.innerHeight
        // console.log(
        //     this.el.nativeElement,
        //     this.elementPos,
        //     this.elementHeight,
        //     this.windowHeight
        // )
    }
    saveScrollPos() {
        this.scrollPos = window.scrollY
    }
    getOffsetTop(element: any) {
        let offsetTop = element.offsetTop || 0
        if (element.offsetParent) {
            offsetTop += this.getOffsetTop(element.offsetParent)
        }
        // console.log(element, offsetTop)
        return offsetTop
    }

    checkVisibility() {
        if (this.isVisible()) {
            // double check dimensions (due to async loaded contents, e.g. images)
            this.saveDimensions()
            // if (this.isVisible()) {
                this.unsubscribe()
                console.log(this.el, 'visible')
                this.appear.emit()
            // }
        }
    }
    isVisible() {
      
        return (
            this.scrollPos >= this.elementPos ||
            this.scrollPos + this.windowHeight >=
                this.elementPos + this.elementHeight
        )
    }

    subscribe() {
        this.subscriptionScroll = fromEvent(window, 'scroll')
            .pipe(startWith(null))
            .subscribe(() => {
                this.saveScrollPos()
                this.checkVisibility()
            })
        this.subscriptionResize = fromEvent(window, 'resize')
            .pipe(startWith(null))
            .subscribe(() => {
                this.saveDimensions()
                this.checkVisibility()
            })
    }
    unsubscribe() {
        if (this.subscriptionScroll) {
            this.subscriptionScroll.unsubscribe()
        }
        if (this.subscriptionResize) {
            this.subscriptionResize.unsubscribe()
        }
    }

    ngAfterViewInit() {
        this.subscribe()
    }
    ngOnDestroy() {
        this.unsubscribe()
    }
}

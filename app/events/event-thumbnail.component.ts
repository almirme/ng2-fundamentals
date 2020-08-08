import { Component, Input } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html'
})
export class EventThumbnailComponent {
    @Input() event: any;

    someProperty: any = "Some value";

    logFoo() {
        console.log('here is foo');
    }
}
import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styleUrls: ['app/events/event-details/event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
    event: any;

    constructor(private eventService: EventService) {

    }

    ngOnInit(): void {
        this.event = this.eventService.getEvent(1);
    }

}
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PublishComponent } from "./publish/publish.component";

@Component({
  selector: 'app-explore',
  imports: [RouterLink, PublishComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {
  publishModal = false;
  openPublishModal() {
    this.publishModal = !this.publishModal
  }
}

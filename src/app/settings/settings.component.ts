import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
 messages = [
    { content: 'Hi there!', mine: false },
    { content: 'Hello!', mine: true },
    { content: 'How are you?', mine: false }
  ];
  
  newMessage = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ content: this.newMessage, mine: true });
      this.newMessage = '';
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.less']
})
export class FAQComponent implements OnInit {

  constructor() { }

  public faqs = [
    {
      title: 'WHY BUY TRAVEL INSURANCE?',
      // tslint:disable-next-line:max-line-length
      description: 'The answer is easy. Whether you travel for business or pleasure, travel involves risk. What if you arrive at your destination and your luggage does not? A personal emergency could require an early return and a medical emergency could mean hospitalization or even air evacuation. Without suitable travel insurance, you could be financially responsible for a significant bill. We work with the providers that take the risk out of travel, so you can have an enjoyable and productive trip.'
    }, {
      title: 'WHAT DOCUMENTS DO I BRING WHEN TRAVELLING TO THE DOMINICAN, CUBA OR MEXICO?',
      // tslint:disable-next-line:max-line-length
      description: 'Another great question. As of recently, you will require a passport when traveling to Cuba, Mexico or the Dominican Republic. A passport is good for five years or  ten years. You will need to fill out documentation and have photos taken in order to apply for a passport and most agencies carry these forms.'
    }, {
      title: 'HOW DO YOU AVOID THE HIGH COSTS OF A EUROPEAN VACATION?',
      // tslint:disable-next-line:max-line-length
      description: 'Depending on your idea of traveling through Europe, a Contiki tour or a Bus tour might be a great way to see a wide variety of countries within a reasonable amount of time. A Contiki tour is only for people between the ages 18-35 and offers some of the best value available in Europe, even better than staying at a hostel and traveling on the Euro Rail!! If you wish to travel in style and luxury here is a tip many do not know. Mediterranean Cruises offer great value for staying and seeing many cities and countries within Europe. Not only will you avoid the high costs of hotels, you will have all of your meals included, which is the second largest expense when traveling to Europe. You can stay on board the cruise for approximately $250-$325 a day and that includes your accommodations, food, and entertainment. Simply unbeatable! If you are looking to stay further inland than why not do an extra few days in one of your favorite ports of call!! You will still be farther ahead!'
    }, {
      title: 'WHAT SHOULD YOU BRING WHEN YOU TRAVEL?',
      // tslint:disable-next-line:max-line-length
      description: 'This answer depends on where you are traveling to and for how long. In general, bring things you can use over again without having to wash them daily. For example, bring one light coat and maybe a couple of sweaters to wear under if the need arises. This will depend on the climate you are in of course. Bring footwear you will be able to use on more than one occasion; sneakers are great for walking, comfort, and style. Avoid bringing too many pairs of shoes since they can add additional weight and room in your luggage. What about cosmetics? Shampoo will be provided in many higher-end hotels throughout the world, however, in places such as Cuba they will not. Therefore you may want to bring your own, and extra for some of the staff. A great way to show your appreciation!!'
    }, {
      title: 'WHAT\'S THE BEST WAY TO SEE EUROPE AND AVOID THE HIGH COSTS OF ACCOMODATIONS?',
      // tslint:disable-next-line:max-line-length
      description: 'While traveling within Europe is a very educational experience no matter how you travel through its history. You can travel in Luxury and style or travel on a budget. The reason why Europe is so costly to visit is because of sustainable development. This means there is very little room in many countries for additional housing, or accommodations, meaning prices are higher than the average. The only way to accommodate the growth and rising curiosity in Europe is to build up and this costs money, and one way to subsidize the cost is to raise prices within the tourism industry.'
    }, {
      title: 'WHAT VACATION TYPE OFFERS THE BEST VALUE?',
      // tslint:disable-next-line:max-line-length
      description: 'In my expert opinion, it would be cruising! Why? Cruises offer more value for your money because of what you are receiving in return. For example, you are seeing more than one destination than you would with an all-inclusive package. If you were to see each place individually the air alone would cost you far more than the cost of the cruise. The meals you receive on board a cruise are phenomenal! If you wanted to have these types of meals at any restaurant comparable to the quality of food, it would cost you anywhere from $50 to $100 per person! Once you add in the 6 daily meals you can choose from and be able to dine casual or formal, you have saved yourself far more than you realize! Plus with Cruising your nightly entertainment is included. Entertainment that rated among the best in the world by many magazines, ranging from Vegas-style dancing to comedian shows. The last reason why Cruising is now becoming the choice of travel around the world is convenience!! This is by far the best part of a cruise. Everything is only an elevator ride away and there are no extra expenses to travel and see a dance extravaganza, or party the night away at one of the spectacular discos! Things just can’t get any better!'
    }, {
      title: 'WHAT DO I NEED WHEN TRAVELLING TO EUROPE AND ASIA?',
      // tslint:disable-next-line:max-line-length
      description: 'When traveling abroad to destinations such as these it is always best to first have a valid passport, secondly to check with a doctor with regards to required vaccinations. As agents, we are no longer legally able to advise a client of what is needed for a vaccination. Vaccinations are changing daily and it is a good idea to be up to date at all times. It is always good to research any remote areas when traveling to such places in order to avoid conflict and possible political issues.'
    }, {
      title: 'WHY SHOULD I USE A TRAVEL AGENT INSTEAD OF BOOKING ONLINE?',
      // tslint:disable-next-line:max-line-length
      description: 'This is a very good question especially today with technology so advanced and capable of doing many things. Using a travel agent will save you time; time you can use for other important things such as your job, family, and quality of life. A travel agent will also save you money! Our agents have extensive experience in the travel industry and they know many ways to save you money, for example, what kind of vacations offer the most value for your money!! The Internet is a great way to research your vacation, however, it is not wise to apply payment over the Internet. Simply because once you have made your payment you are committed to your purchase that is totally non-refundable!'
    }, {
      title: 'HOW DO I CHOOSE THE RIGHT DESTINATION FOR MY VACATION?',
      // tslint:disable-next-line:max-line-length
      description: 'As travel agents, it is our job to ask you questions to determine your needs and expectations. Questions such as what would you like to see and do when you are away? Where have you been before? Would you like to have meals, and or drinks included? These will are some of the things we will ask you in order to properly complete your vacation plan.'
    }, {
      title: 'HOW DO I CHOOSE THE RIGHT TRAVEL AGENT?',
      // tslint:disable-next-line:max-line-length
      description: 'Choosing the right agent can make the world of difference between taking a trip and having an unforgettable vacation! Our agents have been in the travel business for over 30 years. Our business is based on your satisfaction, which has built a mutual trust between our agents and our customers. This is the philosophy we use to both build future relationships and strengthen existing ones.'
    }, {
      title: 'WHAT TIME OF YEAR SHOULD I TRAVEL?',
      // tslint:disable-next-line:max-line-length
      description: 'Time of year has a lot to do with the weather, the popularity of a destination, and the price of your holiday. Deciding on what you want to see, do, and have will help in determining your times for travel.'
    }, {
      title: 'HOW DO I GET THE BEST VALUE FOR MY MONEY WHEN BOOKING?',
      // tslint:disable-next-line:max-line-length
      description: 'The important thing to remember when planning a vacation is to think value first before price. Value is more important than price. Value is determined by what you receive not how much you pay! Cruising and all-inclusive vacations offer the best value for your money!!'
    }, {
      title: 'HOW CAN I SAVE ON AIRLINE TICKETS AND MY OVERALL VACATION?',
      // tslint:disable-next-line:max-line-length
      description: 'Probably the most common question asked. The best answer to this question is book early and save! Airline pricing is determined by space and availability. Once space becomes limited, prices will rise! Nine times out of ten you will find better pricing for airline tickets in advance than waiting until the last minute. The one time you may find it better to wait is if the airline announces a seat sale. But that is like waiting to win the lottery! No one knows when or if this will happen because it depends on the airline’s inventory. If the airlines have excess inventory then they may advertise a seat sale. However, if sales are steady and inventory is moving accordingly a sale is not likely.Another great advantage of booking early is having more times and places of stay to choose from. In other words, you are getting both what you want and what you deserve!'
    }, {
      title: 'HOW CAN YOUR COMPANY SAVE US TIME AND MONEY?',
      // tslint:disable-next-line:max-line-length
      description: 'As we have mentioned, our experience within the industry is your ticket to securing the vacation you want. We can suggest options that you may never have considered, options that result in more choices of where to travel and when. Ultimately, these tips save you money in the end. Since we have been in the industry for over 40 years we have seen many companies come and go. The key to our success has been to work with providers that offer the best prices and service to our clients. For example, using consolidators for your airline tickets will give you great savings and seat sale prices year round! Being dedicated to service and quality will ensure you are receiving high levels of satisfaction.'
    }, {
      title: 'WHAT ABOUT THE SELL OFF VACATIONS?',
      // tslint:disable-next-line:max-line-length
      description: 'You had to ask, didn’t you? Well, to be honest sometimes these are great deals and other times the places that are listed as sell offs are there for a reason. Meaning they haven’t sold because they were not worth the money, the resort is in need of renovations, the location is poor, or the destination has had problems or tension during the past few months. Another thing to remember about the sell-offs is they are always limited and most times very few rooms, therefore if you and others are planning to go at the last minute together you may want to reconsider, it will be highly unlikely you will all find space in the same resort! You may also not find the dates you are looking for either and be forced to settle for a date later in the spring, as opposed to traveling in the winter months when vacation is most worthy.'
    }
  ];

  ngOnInit() {
  }

}

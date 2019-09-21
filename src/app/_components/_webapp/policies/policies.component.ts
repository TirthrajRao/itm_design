import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.less']
})
export class PoliciesComponent implements OnInit {
  public policies = [
    {
      title: 'FIRST PRICE BEST PRICE - GUARANTEED',
      // tslint:disable-next-line:max-line-length
      description: 'Clients booking early receive the best benefits, value and the lowest prices! When a new tour is announced Collins Tours guarantees the first sale price you see and is the best price offered for any particular tour!  After the initial sale date, all tour prices will continue to go up until full price of the tour is met, the tour becomes sold out or the tour departs.  Collin’s Tours does not offer any last minute bookings at discounted rates. Collins Tours “First Price, Best Price Guarantee” ensures clients who book first receive the best value and you can be confident in knowing there will never be a price drop, ever!<br/>All pricing and reservations are confirmed once the initial deposits have been made and payments received.  Without deposits, reservations are not confirmed and therefore prices cannot be guaranteed. Deposits can be made through online bookings, Visa or Master card directly or via phone, electronic transfers, cash, or check.  Deposits are 100% non-refundable without travel insurance and once inside final payment dates, your tour becomes 100% non-refundable without travel insurance.  Collin’s Tours suggests purchasing travel insurance within the first 48 hours of issuing your deposit in order to fully protect your booking, please inquire about insurance when initiating your reservation.<br/>Please note: Pricing from previous sales cannot be honored past sale end dates. In order to receive the “First Price, Best Price Guarantee” all reservations and deposits must be made during the specified dates of the current sale.  Once the date of promotion and/or current sale has passed, sale prices are no longer valid and current pricing for any tour is now in effect.  All terms and conditions of “First Price Best Price Guarantee” are strictly followed and enforced in order to ensure our guarantee is honored and all clients are awarded fairly and appropriately for booking our tours early.<br/>At Collin’s Tours, you can be assured that the tour you choose will never be offered at a lower price than the day you book. Say goodbye to worrying about the price dropping after your booking has been made!'
    }, {
      title: 'DEPOSITS AND ADDITIONAL FEES',
      // tslint:disable-next-line:max-line-length
      description: 'At the time of booking Collin’s Tours requires a deposit (determined per tour), which is 100% non-refundable. This deposit secures your arrangements.<br/>Prior to travel, all arrangements must be paid for in full by the designated date. Our travel rates are established based on current exchange rates, applicable taxes, fuel costs, and other related costs to Collins Tours. Sale prices and promotions are established with expiration dates. These factors mean that our rates are subject to price increases. To take advantage of current pricing, please arrange to pay a deposit with Collins Tours as early as possible.<br/>Collin’s Tours encourages all passengers to secure travel insurance protection for the unforeseeable circumstance requiring cancellation or interruption of your vacation. Similarly, insurance for medical coverage is also advised.'
    }, {
      title: 'CROSS BORDER AND INTERNATIONAL TRAVEL',
      // tslint:disable-next-line:max-line-length
      description: 'In advance of your departure date, Collin’s Tours requires information from your valid and current passport to ensure efficient processing at international borders. You must also ensure that you bring your passport and other pertinent IDs or documentation with you on the trip.<br />It is the responsibility of each traveler to verify their status with Border Officials to ensure entrance eligibility. U.S. Customs and other international authorities have the right to refuse entry to anyone with a past record. Please check to clarify your status if you have any concerns. Collins Tour’s is not responsible in any form, nor liable for any costs or expenses incurred from such denial of entry, refusal of boarding planes, trains, cruises – locally or abroad.'
    }, {
      title: 'SEAT ROTATION',
      // tslint:disable-next-line:max-line-length
      description: 'On most motorcoach trips, Collins Tour’s practices seat rotation. The orchestration of these arrangements will be explained on board by your tour manager. There are no exceptions to seat rotation without written notice from a physician. Special arrangements may have to be made spontaneously by the tour manager for unforeseen circumstances while traveling.'
    }, {
      title: 'ACCESSIBILITY',
      // tslint:disable-next-line:max-line-length
      description: 'Travellers requiring assistance must be accompanied by a companion who will be fully responsible while on tour.'
    }, {
      title: 'LUGGAGE ALLOWANCE',
      // tslint:disable-next-line:max-line-length
      description: 'On motor coach tours each guest is allowed one large suitcase, which is stored in the luggage compartment beneath the bus, one carry-on bag suitable for storage in the overhead compartment or under your seat, and a personal item such as a purse or camera bag.<br />For your return trip, we understand that you may have done some shopping. Please be aware that you are likely not the only one and be considerate of the limitations of storage capacity. If you are concerned about the size of your intended purchases, please speak with your tour manager.'
    }, {
      title: 'NAME CHANGE',
      // tslint:disable-next-line:max-line-length
      description: 'Should your travel arrangements change and a substitution of a passenger is required, please be aware that an administrative fee of $100 will be charged per change for any of our Escorted Vacations that use a motor coach as the sole mode of transportation.  Name changes can be made up to 14 days prior to departure date.<br />Name changes are not permitted on Escorted Vacations with Collins Tours that include cruise and/ or air transportation due to the restrictive booking nature of group reservations with cruise lines and air lines.'
    }, {
      title: 'PHOTOGRAPHY',
      // tslint:disable-next-line:max-line-length
      description: 'During your tour, the tour manager may take photographs of you, as part of the group, and these may be used in our print or electronic advertising and marketing without obtaining any further consent from passengers in respect of such photographs.'
    }, {
      title: 'PASSENGER CONDUCT',
      // tslint:disable-next-line:max-line-length
      description: 'Collins Tour’s wishes for all travelers to enjoy their vacation to its fullest, and as such, it is important to understand that Collins Tours has the right to ask any participant to leave should his/her behavior disrupt the group. It is not acceptable that the experience of other travelers is ruined by the disrespectful behavior of any individual.<br />In the event of dismissal, Collins Tours will not provide a refund for the unused portion of the tour, nor will we incur the costs of further travel arrangements for the passenger(s) to return home.  Please note also: Overnight motor coach travel includes a quiet time from 1:30 am until 6:00 am for the comfort and safety of all on board.'
    }, {
      title: 'TRAVELLING WITH CHILDREN',
      // tslint:disable-next-line:max-line-length
      description: 'Any child under the age of majority who participates in our tours must be accompanied and supervised by an adult for the entire length of the tour. Collins Tours will not accept any parental responsibility for any minor tour participants. Collins Tour’s itineraries do not cater to children’s interest or activity levels and are therefore not particularly suited to children. Please use good judgment if bringing a child on a vacation with Collins Tour’s. New Brunswick law required that children under the age of nine must be in a booster seat until they reach the weight of 79lbs (36kgs) or a height of 4ft9in (145cm). Please be aware that motor coaches cannot be fitted with booster seats.'
    }, {
      title: 'EMERGENCY WASHROOMS',
      // tslint:disable-next-line:max-line-length
      description: 'We travel in deluxe, European-style motor coaches, equipped with an onboard emergency washroom. We intentionally use the word “emergency” to remind our passengers that the onboard facilities are not intended for regular use. Rather, we make frequent stops for everyone’s comfort.'
    }, {
      title: 'SCENT SENSITIVITY',
      // tslint:disable-next-line:max-line-length
      description: 'Please avoid the use of perfume or scented sprays on the motorcoach or in an airplane. These are confined spaces, so be courteous to your fellow travelers who may be allergic or sensitive to scents.'
    }, {
      title: 'TIPPING',
      // tslint:disable-next-line:max-line-length
      description: 'Gratuities for your tour manager and driver are not included in your tour price. Tipping is your way of saying “thank you,” for a job well done and although we’ve provided guidelines below, tipping should be extended on an individual basis at your discretion. Tip private tour guides for city tours $2 per person, per day Collins Tours tour managers – anywhere from $3.50-$6.00 per person, per day Motorcoach driver – minimum of $2.50 per person, per day.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

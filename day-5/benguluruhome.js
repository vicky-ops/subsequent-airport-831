let left = 1;
let right = 3;

function show() {
  for (let i = left; i <= right; i++) {
    document.getElementById("c" + i).style.display = "inline-block";
  }
}

function moveleft() {
  if (left <= 3 && right <= 7) {
    document.getElementById("c" + left).style.display = "none";
    left += 1;
    right += 1;

    for (let i = left; i <= right; i++) {
      document.getElementById("c" + i).style.display = "inline-block";
    }
  } else return;
}

function moveright() {
  if (left >= 2 && right >= 6) {
    document.getElementById("c" + right).style.display = "none";
    left -= 1;
    right -= 1;

    for (let i = left; i <= right; i++) {
      document.getElementById("c" + i).style.display = "inline-block";
    }
  } else return;
}


function myfun(){
  let left = 1;
  let right = 5;

  function show() {
    for (let i = left; i <= right; i++) {
      document.getElementById("c" + i).style.display = "inline-block";
    }
  }

  function moveleft() {
    if (left <= 3 && right <= 7) {
      document.getElementById("c" + left).style.display = "none";
      left += 1;
      right += 1;

      for (let i = left; i <= right; i++) {
        document.getElementById("c" + i).style.display = "inline-block";
      }
    } else return;
  }

  function moveright() {
    if (left >= 2 && right >= 6) {
      document.getElementById("c" + right).style.display = "none";
      left -= 1;
      right -= 1;

      for (let i = left; i <= right; i++) {
        document.getElementById("c" + i).style.display = "inline-block";
      }
    } else return;
  }

}








let data2 = [
  {
    type: "ATTRACTION",
    location_id: "3807223",
    name: "UB City",
    latitude: "12.971629",
    longitude: "77.595795",
    num_reviews: "2800",
    timezone: "Asia/Kolkata",
    location_string: "Bengaluru, Bangalore District, Karnataka",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/08/e0/d9/9f/ub-city.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/08/e0/d9/9f/ub-city.jpg",
          height: "50",
        },
        original: {
          width: "1600",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/08/e0/d9/9f/ub-city.jpg",
          height: "646",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/08/e0/d9/9f/ub-city.jpg",
          height: "413",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/08/e0/d9/9f/ub-city.jpg",
          height: "222",
        },
      },
      is_blessed: true,
      uploaded_date: "2015-09-09T03:59:00-0400",
      caption: "UB City",
      id: "148953503",
      helpful_votes: "62",
      published_date: "2015-09-09T03:59:00-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/3807223",
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2020",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2020",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2019",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2019",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2018",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2018",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2017",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2017",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2016",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2016",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2015",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2015",
      },
    ],
    location_subtype: "none",
    doubleclick_zone: "as.india.karnataka.bangalore",
    preferred_map_engine: "default",
    raw_ranking: "3.853447198867798",
    ranking_geo: "Bengaluru",
    ranking_geo_id: "297628",
    ranking_position: "18",
    ranking_denominator: "371",
    ranking_category: "attraction",
    ranking_subcategory: "#18 of 371 things to do in Bengaluru",
    subcategory_ranking: "#18 of 371 things to do in Bengaluru",
    ranking: "#18 of 371 things to do in Bengaluru",
    distance: null,
    distance_string: null,
    bearing: null,
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    neighborhood_info: [
      {
        location_id: "20484099",
        name: "Richmond Town",
      },
    ],
    description:
      "With the opening of The Collection, UB City in Bangalore, a shopping trip to Europe, which is something that most Indian luxuriates were required to do to prime up their lifestyle, has become irrelevant. The luxury retail market in India, has suddenly taken a radical.",
    web_url:
      "https://www.tripadvisor.com/Attraction_Review-g297628-d3807223-Reviews-UB_City-Bengaluru_Bangalore_District_Karnataka.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g297628-d3807223-UB_City-Bengaluru_Bangalore_District_Karnataka.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bengaluru",
        abbrv: null,
        location_id: "297628",
      },
      {
        subcategory: [
          {
            key: "district",
            name: "District",
          },
        ],
        name: "Bangalore District",
        abbrv: null,
        location_id: "12392950",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Karnataka",
        abbrv: null,
        location_id: "297627",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "India",
        abbrv: null,
        location_id: "293860",
      },
    ],
    category: {
      key: "attraction",
      name: "Attraction",
    },
    subcategory: [
      {
        key: "26",
        name: "Shopping",
      },
    ],
    parent_display_name: "Bengaluru",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+91 97316 00994",
    website: "http://www.ubcitybangalore.in",
    address_obj: {
      street1: "24 Vittal Mallya Road",
      street2: null,
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      postalcode: "560001",
    },
    address: "24 Vittal Mallya Road, Bengaluru 560001 India",
    hours: {
      week_ranges: [
        [
          {
            open_time: 630,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 630,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 630,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 630,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 630,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 630,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 630,
            close_time: 1410,
          },
        ],
      ],
      timezone: "Asia/Kolkata",
    },
    is_candidate_for_contact_info_suppression: false,
    subtype: [
      {
        key: "143",
        name: "Shopping Malls",
      },
    ],
    booking: {
      provider: "Viator",
      url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FFree-Walking-Tour-Bangalore%2Fd5310-73045P126%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=44a607f94f7735699&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=3807223&clt=TD&from=api&nt=true",
    },
    offer_group: {
      lowest_price: "$0.00",
      offer_list: [
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FFree-Walking-Tour-Bangalore%2Fd5310-73045P126%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=44a607f94f7735699&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=3807223&clt=TD&from=api&nt=true",
          price: "$11.72",
          rounded_up_price: "$12",
          offer_type: "",
          title: "Bangalore Walking Tour ",
          product_code: "73045P126",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/09/db/89/31.jpg",
          description: null,
          primary_category: "Cultural Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FArchitecture-Tour-of-Bangalore%2Fd5310-16607P23%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=9441a1a8a15fb75b3&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=3807223&clt=TD&from=api&nt=true",
          price: "$76.36",
          rounded_up_price: "$77",
          offer_type: "",
          title: "Architecture Tour of Bangalore",
          product_code: "16607P23",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/6b/85/6a.jpg",
          description: null,
          primary_category: "Historical & Heritage Tours",
        },
      ],
      has_see_all_url: true,
      is_eligible_for_ap_list: true,
    },
    tags: {},
    reviews: [],
  },
  {
    type: "ATTRACTION",
    location_id: "325162",
    name: "ISKCON Temple Bangalore",
    latitude: "12.983932",
    longitude: "77.57959",
    num_reviews: "4822",
    timezone: "Asia/Kolkata",
    location_string: "Bengaluru, Bangalore District, Karnataka",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/23/a2/b1/90/front-view-of-temple.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/23/a2/b1/90/front-view-of-temple.jpg",
          height: "50",
        },
        original: {
          width: "1280",
          url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/23/a2/b1/90/front-view-of-temple.jpg",
          height: "850",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/23/a2/b1/90/front-view-of-temple.jpg",
          height: "680",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/23/a2/b1/90/front-view-of-temple.jpg",
          height: "365",
        },
      },
      is_blessed: true,
      uploaded_date: "2022-05-31T06:26:55-0400",
      caption: "Front view of temple",
      id: "597864848",
      helpful_votes: "1",
      published_date: "2022-05-31T06:26:55-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/325162",
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2022",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2022_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2022",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2021",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2021",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2020",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2020",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2019",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2019",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2018",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2018",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2017",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2017",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2016",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2016",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2015",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2015",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2014",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2014_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2014",
      },
    ],
    location_subtype: "none",
    doubleclick_zone: "as.india.karnataka.bangalore",
    preferred_map_engine: "default",
    raw_ranking: "3.986555337905884",
    ranking_geo: "Bengaluru",
    ranking_geo_id: "297628",
    ranking_position: "5",
    ranking_denominator: "371",
    ranking_category: "attraction",
    ranking_subcategory: "#5 of 371 things to do in Bengaluru",
    subcategory_ranking: "#5 of 371 things to do in Bengaluru",
    ranking: "#5 of 371 things to do in Bengaluru",
    distance: null,
    distance_string: null,
    bearing: null,
    rating: "4.5",
    is_closed: false,
    open_now_text: "Closes in 2 min",
    is_long_closed: false,
    description:
      "ISKCON Sri Radha Krishna temple was inaugurated in the year 1997. It is not just a temple, but a cultural complex housing the temples dedicated to the Deities of Sri Sri Radha Krishnachandra, Sri Sri Krishna Balarama, Sri Sri Nitai Gauranga.",
    web_url:
      "https://www.tripadvisor.com/Attraction_Review-g297628-d325162-Reviews-ISKCON_Temple_Bangalore-Bengaluru_Bangalore_District_Karnataka.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g297628-d325162-ISKCON_Temple_Bangalore-Bengaluru_Bangalore_District_Karnataka.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bengaluru",
        abbrv: null,
        location_id: "297628",
      },
      {
        subcategory: [
          {
            key: "district",
            name: "District",
          },
        ],
        name: "Bangalore District",
        abbrv: null,
        location_id: "12392950",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Karnataka",
        abbrv: null,
        location_id: "297627",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "India",
        abbrv: null,
        location_id: "293860",
      },
    ],
    category: {
      key: "attraction",
      name: "Attraction",
    },
    subcategory: [
      {
        key: "47",
        name: "Sights & Landmarks",
      },
    ],
    parent_display_name: "Bengaluru",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+91 98101 15661",
    website: "http://www.iskconbangalore.org/",
    email: "iskcon.communications@hkm-group.org",
    address_obj: {
      street1: "Chord Road",
      street2: "Hare Krishna Hill",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      postalcode: "560010",
    },
    address: "Chord Road Hare Krishna Hill, Bengaluru 560010 India",
    hours: {
      week_ranges: [
        [
          {
            open_time: 255,
            close_time: 300,
          },
          {
            open_time: 435,
            close_time: 1230,
          },
        ],
        [
          {
            open_time: 255,
            close_time: 300,
          },
          {
            open_time: 435,
            close_time: 780,
          },
          {
            open_time: 975,
            close_time: 1220,
          },
        ],
        [
          {
            open_time: 255,
            close_time: 300,
          },
          {
            open_time: 435,
            close_time: 780,
          },
          {
            open_time: 975,
            close_time: 1220,
          },
        ],
        [
          {
            open_time: 255,
            close_time: 300,
          },
          {
            open_time: 435,
            close_time: 780,
          },
          {
            open_time: 975,
            close_time: 1220,
          },
        ],
        [
          {
            open_time: 255,
            close_time: 300,
          },
          {
            open_time: 435,
            close_time: 780,
          },
          {
            open_time: 975,
            close_time: 1220,
          },
        ],
        [
          {
            open_time: 255,
            close_time: 300,
          },
          {
            open_time: 435,
            close_time: 780,
          },
          {
            open_time: 975,
            close_time: 1220,
          },
        ],
        [
          {
            open_time: 255,
            close_time: 300,
          },
          {
            open_time: 435,
            close_time: 1230,
          },
        ],
      ],
      timezone: "Asia/Kolkata",
    },
    is_candidate_for_contact_info_suppression: false,
    subtype: [
      {
        key: "10",
        name: "Sacred & Religious Sites",
      },
    ],
    booking: {
      provider: "Viator",
      url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2FBangalore-attractions%2FISKCON-Temple-Bangalore-Sri-Radha-Krishna-Temple-tours-tickets%2Fd5310-a11674%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=672d33ad19400c81d&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=325162&clt=TD&from=api&nt=true",
    },
    offer_group: {
      lowest_price: "$0.01",
      offer_list: [
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FPrivate-Full-Day-Tour-of-Bangalore-City%2Fd5310-34682P13%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=172fef612455e33cd&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=325162&clt=TD&from=api&nt=true",
          price: "$77.87",
          rounded_up_price: "$78",
          offer_type: "",
          title: " Private Full-Day Bangalore City Tour",
          product_code: "34682P13",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/d7/ba/ea.jpg",
          description: null,
          primary_category: "Private Sightseeing Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FBangalore-Full-Day-Sightseeing-in-Private-Cab%2Fd5310-189829P1%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=d72a7348a68caddb2&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=325162&clt=TD&from=api&nt=true",
          price: "$41.41",
          rounded_up_price: "$42",
          offer_type: "",
          title: "Bangalore Full Day Sightseeing in Private Cab",
          product_code: "189829P1",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/08/cf/36/6d.jpg",
          description: null,
          primary_category: "Bus & Minivan Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FFull-Day-Private-Tour-of-Temples-of-Bengaluru%2Fd5310-7325P52%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=143bd09ec9735b424&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=3&cnt=1&geo=325162&clt=TD&from=api&nt=true",
          price: "$199.00",
          rounded_up_price: "$199",
          offer_type: "",
          title: "Full Day Private Tour of Temples of Bengaluru",
          product_code: "7325P52",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/74/2e/f9.jpg",
          description: null,
          primary_category: "4WD, ATV & Off-Road Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FBangalore-Full-Day-Private-Tour%2Fd5310-144293P2%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=8722e97eadeb69e4b&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=4&cnt=1&geo=325162&clt=TD&from=api&nt=true",
          price: "$83.20",
          rounded_up_price: "$84",
          offer_type: "",
          title: "Bangalore - Full Day Private Tour",
          product_code: "144293P2",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/80/ec/78.jpg",
          description: null,
          primary_category: "Cultural Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2F8-Hour-Custom-Private-Tour-of-Bengaluru%2Fd5310-7325P54%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=7fefe436a4445bb52&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=5&cnt=1&geo=325162&clt=TD&from=api&nt=true",
          price: "$139.00",
          rounded_up_price: "$139",
          offer_type: "",
          title: "8-Hour Custom Private Tour of Bengaluru",
          product_code: "7325P54",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/74/2e/fc.jpg",
          description: null,
          primary_category: "Bus & Minivan Tours",
        },
      ],
      has_see_all_url: true,
      is_eligible_for_ap_list: true,
    },
    fee: "YES",
    tags: {},
    reviews: [],
  },
  {
    type: "ATTRACTION",
    location_id: "3807223",
    name: "UB City",
    latitude: "12.971629",
    longitude: "77.595795",
    num_reviews: "2800",
    timezone: "Asia/Kolkata",
    location_string: "Bengaluru, Bangalore District, Karnataka",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/08/e0/d9/9f/ub-city.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/08/e0/d9/9f/ub-city.jpg",
          height: "50",
        },
        original: {
          width: "1600",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/08/e0/d9/9f/ub-city.jpg",
          height: "646",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/08/e0/d9/9f/ub-city.jpg",
          height: "413",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/08/e0/d9/9f/ub-city.jpg",
          height: "222",
        },
      },
      is_blessed: true,
      uploaded_date: "2015-09-09T03:59:00-0400",
      caption: "UB City",
      id: "148953503",
      helpful_votes: "62",
      published_date: "2015-09-09T03:59:00-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/3807223",
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2020",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2020",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2019",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2019",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2018",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2018",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2017",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2017",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2016",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2016",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2015",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2015",
      },
    ],
    location_subtype: "none",
    doubleclick_zone: "as.india.karnataka.bangalore",
    preferred_map_engine: "default",
    raw_ranking: "3.853447198867798",
    ranking_geo: "Bengaluru",
    ranking_geo_id: "297628",
    ranking_position: "18",
    ranking_denominator: "371",
    ranking_category: "attraction",
    ranking_subcategory: "#18 of 371 things to do in Bengaluru",
    subcategory_ranking: "#18 of 371 things to do in Bengaluru",
    ranking: "#18 of 371 things to do in Bengaluru",
    distance: null,
    distance_string: null,
    bearing: null,
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    neighborhood_info: [
      {
        location_id: "20484099",
        name: "Richmond Town",
      },
    ],
    description:
      "With the opening of The Collection, UB City in Bangalore, a shopping trip to Europe, which is something that most Indian luxuriates were required to do to prime up their lifestyle, has become irrelevant. The luxury retail market in India, has suddenly taken a radical.",
    web_url:
      "https://www.tripadvisor.com/Attraction_Review-g297628-d3807223-Reviews-UB_City-Bengaluru_Bangalore_District_Karnataka.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g297628-d3807223-UB_City-Bengaluru_Bangalore_District_Karnataka.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bengaluru",
        abbrv: null,
        location_id: "297628",
      },
      {
        subcategory: [
          {
            key: "district",
            name: "District",
          },
        ],
        name: "Bangalore District",
        abbrv: null,
        location_id: "12392950",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Karnataka",
        abbrv: null,
        location_id: "297627",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "India",
        abbrv: null,
        location_id: "293860",
      },
    ],
    category: {
      key: "attraction",
      name: "Attraction",
    },
    subcategory: [
      {
        key: "26",
        name: "Shopping",
      },
    ],
    parent_display_name: "Bengaluru",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+91 97316 00994",
    website: "http://www.ubcitybangalore.in",
    address_obj: {
      street1: "24 Vittal Mallya Road",
      street2: null,
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      postalcode: "560001",
    },
    address: "24 Vittal Mallya Road, Bengaluru 560001 India",
    hours: {
      week_ranges: [
        [
          {
            open_time: 630,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 630,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 630,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 630,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 630,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 630,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 630,
            close_time: 1410,
          },
        ],
      ],
      timezone: "Asia/Kolkata",
    },
    is_candidate_for_contact_info_suppression: false,
    subtype: [
      {
        key: "143",
        name: "Shopping Malls",
      },
    ],
    booking: {
      provider: "Viator",
      url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FFree-Walking-Tour-Bangalore%2Fd5310-73045P126%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=44a607f94f7735699&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=3807223&clt=TD&from=api&nt=true",
    },
    offer_group: {
      lowest_price: "$0.00",
      offer_list: [
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FFree-Walking-Tour-Bangalore%2Fd5310-73045P126%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=44a607f94f7735699&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=3807223&clt=TD&from=api&nt=true",
          price: "$11.72",
          rounded_up_price: "$12",
          offer_type: "",
          title: "Bangalore Walking Tour ",
          product_code: "73045P126",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/09/db/89/31.jpg",
          description: null,
          primary_category: "Cultural Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FArchitecture-Tour-of-Bangalore%2Fd5310-16607P23%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=9441a1a8a15fb75b3&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=3807223&clt=TD&from=api&nt=true",
          price: "$76.36",
          rounded_up_price: "$77",
          offer_type: "",
          title: "Architecture Tour of Bangalore",
          product_code: "16607P23",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/6b/85/6a.jpg",
          description: null,
          primary_category: "Historical & Heritage Tours",
        },
      ],
      has_see_all_url: true,
      is_eligible_for_ap_list: true,
    },
    tags: {},
    reviews: [],
  },
  {
    type: "ATTRACTION",
    location_id: "8124216",
    name: "Commercial Street",
    latitude: "12.98221",
    longitude: "77.60827",
    num_reviews: "1213",
    timezone: "Asia/Kolkata",
    location_string: "Bengaluru, Bangalore District, Karnataka",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/08/4a/d8/4b/commercial-street.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/08/4a/d8/4b/commercial-street.jpg",
          height: "50",
        },
        original: {
          width: "1003",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/08/4a/d8/4b/commercial-street.jpg",
          height: "752",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/08/4a/d8/4b/commercial-street.jpg",
          height: "412",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/08/4a/d8/4b/commercial-street.jpg",
          height: "187",
        },
      },
      is_blessed: false,
      uploaded_date: "2015-07-06T11:50:24-0400",
      caption: "Main street",
      id: "139122763",
      helpful_votes: "11",
      published_date: "2015-07-06T11:50:24-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/8124216",
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2020",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2020",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2019",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2019",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2018",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2018",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2017",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2017",
      },
    ],
    location_subtype: "none",
    doubleclick_zone: "as.india.karnataka.bangalore",
    preferred_map_engine: "default",
    raw_ranking: "3.741189956665039",
    ranking_geo: "Bengaluru",
    ranking_geo_id: "297628",
    ranking_position: "26",
    ranking_denominator: "371",
    ranking_category: "attraction",
    ranking_subcategory: "#26 of 371 things to do in Bengaluru",
    subcategory_ranking: "#26 of 371 things to do in Bengaluru",
    ranking: "#26 of 371 things to do in Bengaluru",
    distance: null,
    distance_string: null,
    bearing: null,
    rating: "4.0",
    is_closed: false,
    is_long_closed: false,
    neighborhood_info: [
      {
        location_id: "13087481",
        name: "Shivajinagar/Commercial Street",
      },
    ],
    description:
      "Courses are held in various rooms at different levels of the mantap and satsangs are held on the main level. Each level opens onto a gallery. Following a circular design, the levels provide an excellent view of the campus grounds and the open grounds and hills in the distance.",
    web_url:
      "https://www.tripadvisor.com/Attraction_Review-g297628-d8124216-Reviews-Commercial_Street-Bengaluru_Bangalore_District_Karnataka.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g297628-d8124216-Commercial_Street-Bengaluru_Bangalore_District_Karnataka.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bengaluru",
        abbrv: null,
        location_id: "297628",
      },
      {
        subcategory: [
          {
            key: "district",
            name: "District",
          },
        ],
        name: "Bangalore District",
        abbrv: null,
        location_id: "12392950",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Karnataka",
        abbrv: null,
        location_id: "297627",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "India",
        abbrv: null,
        location_id: "293860",
      },
    ],
    category: {
      key: "attraction",
      name: "Attraction",
    },
    subcategory: [
      {
        key: "47",
        name: "Sights & Landmarks",
      },
      {
        key: "51",
        name: "Other",
      },
    ],
    parent_display_name: "Bengaluru",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    address_obj: {
      street1: "Commercial Street",
      street2: "Tasker Town",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      postalcode: "560001",
    },
    address: "Commercial Street Tasker Town, Bengaluru 560001 India",
    is_candidate_for_contact_info_suppression: false,
    subtype: [
      {
        key: "34",
        name: "Neighborhoods",
      },
    ],
    booking: {
      provider: "Viator",
      url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FBangalore-Private-Tour-by-TripExploria-Experiences%2Fd5310-164988P1%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=852829f96d76a24f6&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=8124216&clt=TD&from=api&nt=true",
    },
    offer_group: {
      lowest_price: "$0.80",
      offer_list: [
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FBangalore-Private-Tour-by-TripExploria-Experiences%2Fd5310-164988P1%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=852829f96d76a24f6&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=8124216&clt=TD&from=api&nt=true",
          price: "$80.00",
          rounded_up_price: "$80",
          offer_type: "",
          title: "Bangalore Private Tour by TripExploria Experiences",
          product_code: "164988P1",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/a5/40/b9.jpg",
          description: null,
          primary_category: "Cultural Tours",
        },
      ],
      has_see_all_url: true,
      is_eligible_for_ap_list: false,
    },
    tags: {},
    reviews: [],
  },
  {
    type: "ATTRACTION",
    location_id: "2587630",
    name: "Cubbon Park",
    latitude: "12.97669",
    longitude: "77.595",
    num_reviews: "2484",
    timezone: "Asia/Kolkata",
    location_string: "Bengaluru, Bangalore District, Karnataka",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/12/d8/95/4b/excellent-for-morning.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/12/d8/95/4b/excellent-for-morning.jpg",
          height: "50",
        },
        original: {
          width: "1600",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/12/d8/95/4b/excellent-for-morning.jpg",
          height: "1200",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/12/d8/95/4b/excellent-for-morning.jpg",
          height: "413",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/12/d8/95/4b/excellent-for-morning.jpg",
          height: "188",
        },
      },
      is_blessed: false,
      uploaded_date: "2018-05-04T10:15:09-0400",
      caption: "Excellent for morning jog.",
      id: "316183883",
      helpful_votes: "11",
      published_date: "2018-05-04T10:15:09-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/2587630",
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2021",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2021",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2020",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2020",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2019",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2019",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2018",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2018",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2017",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2017",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2016",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2016",
      },
    ],
    location_subtype: "none",
    doubleclick_zone: "as.india.karnataka.bangalore",
    preferred_map_engine: "default",
    raw_ranking: "3.8146705627441406",
    ranking_geo: "Bengaluru",
    ranking_geo_id: "297628",
    ranking_position: "22",
    ranking_denominator: "371",
    ranking_category: "attraction",
    ranking_subcategory: "#22 of 371 things to do in Bengaluru",
    subcategory_ranking: "#22 of 371 things to do in Bengaluru",
    ranking: "#22 of 371 things to do in Bengaluru",
    distance: null,
    distance_string: null,
    bearing: null,
    rating: "4.0",
    is_closed: false,
    is_long_closed: false,
    neighborhood_info: [
      {
        location_id: "13087462",
        name: "Cubbon Park",
      },
    ],
    description:
      "Cubbon Park dons many hats: a green lung in the heart of the city that also hosts a library, museums, a tennis academy, an aquarium, a toy train and many statues and pavilions. It’s probably one of the only parks to have a busy road cutting through it. ",
    web_url:
      "https://www.tripadvisor.com/Attraction_Review-g297628-d2587630-Reviews-Cubbon_Park-Bengaluru_Bangalore_District_Karnataka.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g297628-d2587630-Cubbon_Park-Bengaluru_Bangalore_District_Karnataka.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bengaluru",
        abbrv: null,
        location_id: "297628",
      },
      {
        subcategory: [
          {
            key: "district",
            name: "District",
          },
        ],
        name: "Bangalore District",
        abbrv: null,
        location_id: "12392950",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Karnataka",
        abbrv: null,
        location_id: "297627",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "India",
        abbrv: null,
        location_id: "293860",
      },
    ],
    category: {
      key: "attraction",
      name: "Attraction",
    },
    subcategory: [
      {
        key: "57",
        name: "Nature & Parks",
      },
    ],
    parent_display_name: "Bengaluru",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+91 98101 15661",
    website: "http://www.horticulture.kar.nic.in/cubbon.htm",
    address_obj: {
      street1: "MG Road",
      street2: "",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      postalcode: "",
    },
    address: "MG Road, Bengaluru India",
    is_candidate_for_contact_info_suppression: false,
    subtype: [
      {
        key: "70",
        name: "Parks",
      },
    ],
    booking: {
      provider: "Viator",
      url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2FBangalore-attractions%2FSri-Chamarajendra-Park-Cubbon-Park-tours-tickets%2Fd5310-a11683%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=dac8a92e8a4049703&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=2587630&clt=TD&from=api&nt=true",
    },
    offer_group: {
      lowest_price: "$16.00",
      offer_list: [
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FPrivate-Full-Day-Tour-of-Bangalore-City%2Fd5310-34682P13%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=172fef612455e33cd&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=2587630&clt=TD&from=api&nt=true",
          price: "$77.87",
          rounded_up_price: "$78",
          offer_type: "",
          title: " Private Full-Day Bangalore City Tour",
          product_code: "34682P13",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/d7/ba/ea.jpg",
          description: null,
          primary_category: "Private Sightseeing Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FBengaluru-Heritage-Walk-with-Personal-Hotel-Pickup-and-Drop-Off%2Fd5310-7325P56%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=be1ada1daa53944a9&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=2587630&clt=TD&from=api&nt=true",
          price: "$148.27",
          rounded_up_price: "$149",
          offer_type: "",
          title:
            "Private Tour: 4-Hour Bengaluru Heritage Walk with Hotel Pickup and Drop-Off",
          product_code: "7325P56",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/74/2f/01.jpg",
          description: null,
          primary_category: "4WD, ATV & Off-Road Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FBest-of-Bangalore-Private-Tour%2Fd5310-21342P8%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=93279e3b251902d5b&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=3&cnt=1&geo=2587630&clt=TD&from=api&nt=true",
          price: "$99.00",
          rounded_up_price: "$99",
          offer_type: "",
          title: "Best of Bangalore Private Tour",
          product_code: "21342P8",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/6f/58/32.jpg",
          description: null,
          primary_category: "Private Sightseeing Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FBangalore-by-Tuk-Tuk%2Fd5310-21342P11%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=859cc3a2a4e4bbf51&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=4&cnt=1&geo=2587630&clt=TD&from=api&nt=true",
          price: "$75.00",
          rounded_up_price: "$75",
          offer_type: "",
          title: "Best of Bengaluru in a Tuk Tuk",
          product_code: "21342P11",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/c6/3f/67.jpg",
          description: null,
          primary_category: "Cultural Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FBangalore-Full-Day-Sightseeing-in-Private-Cab%2Fd5310-189829P1%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=d72a7348a68caddb2&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=5&cnt=1&geo=2587630&clt=TD&from=api&nt=true",
          price: "$41.41",
          rounded_up_price: "$42",
          offer_type: "",
          title: "Bangalore Full Day Sightseeing in Private Cab",
          product_code: "189829P1",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/08/cf/36/6d.jpg",
          description: null,
          primary_category: "Bus & Minivan Tours",
        },
      ],
      has_see_all_url: true,
      is_eligible_for_ap_list: true,
    },
    tags: {},
    reviews: [],
  },
  {
    type: "ATTRACTION",
    location_id: "2074081",
    name: "Art of Living International Center",
    latitude: "12.76639",
    longitude: "77.48795",
    num_reviews: "1229",
    timezone: "Asia/Kolkata",
    location_string: "Bengaluru, Bangalore District, Karnataka",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/10/09/0a/1e/art-of-living-international.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/10/09/0a/1e/art-of-living-international.jpg",
          height: "50",
        },
        original: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/10/09/0a/1e/art-of-living-international.jpg",
          height: "412",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/10/09/0a/1e/art-of-living-international.jpg",
          height: "412",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/10/09/0a/1e/art-of-living-international.jpg",
          height: "187",
        },
      },
      is_blessed: false,
      uploaded_date: "2017-07-27T03:44:00-0400",
      caption: "Art of Living International Center",
      id: "269027870",
      helpful_votes: "7",
      published_date: "2017-07-27T03:44:00-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/2074081",
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2020",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2020",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2019",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2019",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2018",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2018",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2017",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2017",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2016",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2016",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2015",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2015",
      },
    ],
    location_subtype: "none",
    doubleclick_zone: "as.india.karnataka.bangalore",
    preferred_map_engine: "default",
    raw_ranking: "4.033762454986572",
    ranking_geo: "Bengaluru",
    ranking_geo_id: "297628",
    ranking_position: "3",
    ranking_denominator: "220",
    ranking_category: "attraction",
    ranking_subcategory: "#3 of 220 Spas & Wellness in Bengaluru",
    subcategory_ranking: "#3 of 220 Spas & Wellness in Bengaluru",
    ranking: "#3 of 220 Spas & Wellness in Bengaluru",
    distance: null,
    distance_string: null,
    bearing: null,
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    description:
      "Welcome to The Art of Living International Centre! Situated on the top of the Panchagiri Hills, 36km southwest of Bangalore, near Udipalya village, the campus is an ideal location for reflection and rejuvenation.",
    web_url:
      "https://www.tripadvisor.com/Attraction_Review-g297628-d2074081-Reviews-Art_of_Living_International_Center-Bengaluru_Bangalore_District_Karnataka.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g297628-d2074081-Art_of_Living_International_Center-Bengaluru_Bangalore_District_Karnataka.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bengaluru",
        abbrv: null,
        location_id: "297628",
      },
      {
        subcategory: [
          {
            key: "district",
            name: "District",
          },
        ],
        name: "Bangalore District",
        abbrv: null,
        location_id: "12392950",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Karnataka",
        abbrv: null,
        location_id: "297627",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "India",
        abbrv: null,
        location_id: "293860",
      },
    ],
    category: {
      key: "attraction",
      name: "Attraction",
    },
    subcategory: [
      {
        key: "40",
        name: "Spas & Wellness",
      },
      {
        key: "47",
        name: "Sights & Landmarks",
      },
    ],
    parent_display_name: "Bengaluru",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+91 90360 05022",
    website: "http://www.bangaloreashram.org",
    email: "socialconnect@vvmvp.org",
    address_obj: {
      street1: "21st Km Kanakapura Road",
      street2: "Udayapura",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      postalcode: "560082",
    },
    address: "21st Km Kanakapura Road Udayapura, Bengaluru 560082 India",
    hours: {
      week_ranges: [
        [
          {
            open_time: 540,
            close_time: 1200,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1200,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1200,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1200,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1200,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1200,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1200,
          },
        ],
      ],
      timezone: "Asia/Kolkata",
    },
    is_candidate_for_contact_info_suppression: false,
    subtype: [
      {
        key: "260",
        name: "Yoga & Pilates",
      },
      {
        key: "12",
        name: "Educational sites",
      },
    ],
    booking: {
      provider: "Viator",
      url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FFull-Day-Private-Tour-of-Temples-of-Bengaluru%2Fd5310-7325P52%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=143bd09ec9735b424&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=2074081&clt=TD&from=api&nt=true",
    },
    offer_group: {
      lowest_price: "$1.99",
      offer_list: [
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FFull-Day-Private-Tour-of-Temples-of-Bengaluru%2Fd5310-7325P52%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=143bd09ec9735b424&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=2074081&clt=TD&from=api&nt=true",
          price: "$199.00",
          rounded_up_price: "$199",
          offer_type: "",
          title: "Full Day Private Tour of Temples of Bengaluru",
          product_code: "7325P52",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/74/2e/f9.jpg",
          description: null,
          primary_category: "4WD, ATV & Off-Road Tours",
        },
      ],
      has_see_all_url: true,
      is_eligible_for_ap_list: false,
    },
    fee: "YES",
    tags: {},
    reviews: [],
  },
  {
    type: "ATTRACTION",
    location_id: "1006969",
    name: "Bannerghatta National Park",
    latitude: "12.90092",
    longitude: "77.60105",
    num_reviews: "2941",
    timezone: "Asia/Kolkata",
    location_string: "Bengaluru, Bangalore District, Karnataka",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0c/bb/93/c2/photo1jpg.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0c/bb/93/c2/photo1jpg.jpg",
          height: "50",
        },
        original: {
          width: "2048",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0c/bb/93/c2/photo1jpg.jpg",
          height: "1536",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/93/c2/photo1jpg.jpg",
          height: "413",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/0c/bb/93/c2/photo1jpg.jpg",
          height: "188",
        },
      },
      is_blessed: false,
      uploaded_date: "2016-08-28T08:33:40-0400",
      caption: "",
      id: "213619650",
      helpful_votes: "1",
      published_date: "2016-08-28T08:33:40-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/1006969",
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2021",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2021",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2020",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2020",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2017",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2017",
      },
    ],
    location_subtype: "none",
    doubleclick_zone: "as.india.karnataka.bangalore",
    preferred_map_engine: "default",
    raw_ranking: "3.640200138092041",
    ranking_geo: "Bengaluru",
    ranking_geo_id: "297628",
    ranking_position: "32",
    ranking_denominator: "371",
    ranking_category: "attraction",
    ranking_subcategory: "#32 of 371 things to do in Bengaluru",
    subcategory_ranking: "#32 of 371 things to do in Bengaluru",
    ranking: "#32 of 371 things to do in Bengaluru",
    distance: null,
    distance_string: null,
    bearing: null,
    rating: "4.0",
    is_closed: false,
    is_long_closed: false,
    neighborhood_info: [
      {
        location_id: "13087496",
        name: "J.P. Nagar",
      },
    ],
    description:
      "Courses are held in various rooms at different levels of the mantap and satsangs are held on the main level. Each level opens onto a gallery. Following a circular design, the levels provide an excellent view of the campus grounds and the open grounds and hills in the distance. ",
    web_url:
      "https://www.tripadvisor.com/Attraction_Review-g297628-d1006969-Reviews-Bannerghatta_National_Park-Bengaluru_Bangalore_District_Karnataka.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g297628-d1006969-Bannerghatta_National_Park-Bengaluru_Bangalore_District_Karnataka.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bengaluru",
        abbrv: null,
        location_id: "297628",
      },
      {
        subcategory: [
          {
            key: "district",
            name: "District",
          },
        ],
        name: "Bangalore District",
        abbrv: null,
        location_id: "12392950",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Karnataka",
        abbrv: null,
        location_id: "297627",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "India",
        abbrv: null,
        location_id: "293860",
      },
    ],
    category: {
      key: "attraction",
      name: "Attraction",
    },
    subcategory: [
      {
        key: "57",
        name: "Nature & Parks",
      },
    ],
    parent_display_name: "Bengaluru",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+91 88949 17116",
    website: "http://bannerghattabiologicalpark.org/",
    email: "dcf@bannerghattabiopark.org",
    address_obj: {
      street1: "Bannerghatta Road",
      street2: "Bannerghatta",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      postalcode: "",
    },
    address: "Bannerghatta Road Bannerghatta, Bengaluru India",
    is_candidate_for_contact_info_suppression: false,
    subtype: [
      {
        key: "68",
        name: "Nature & Wildlife Areas",
      },
    ],
    booking: {
      provider: "Viator",
      url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2FBangalore-attractions%2FBannerghatta-National-Park-tours-tickets%2Fd5310-a14950%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=6b09fff82f6232d54&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=1006969&clt=TD&from=api&nt=true",
    },
    offer_group: {
      lowest_price: "$2.12",
      offer_list: [
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FELEPHANT-CORRIDOR-CYCLE-TRAIL%2Fd5310-162050P2%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=5506415c1b8b3a20c&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=1006969&clt=TD&from=api&nt=true",
          price: "$212.27",
          rounded_up_price: "$213",
          offer_type: "",
          title: "Bannerghatta Cycle Trail",
          product_code: "162050P2",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/a8/14/12.jpg",
          description: null,
          primary_category: "Bike & Mountain Bike Tours",
        },
      ],
      has_see_all_url: true,
      is_eligible_for_ap_list: false,
    },
    fee: "YES",
    animal_welfare_tag: {
      tag_text: "Features Animals",
      msg_header: "This attraction features animals",
      msg_body: "Click below for expert advice on animal welfare in tourism.",
      learn_more_text: "Learn more",
      education_portal_url:
        "https://www.tripadvisor.com/blog/animal-welfare-education-portal/",
    },
    tags: {
      animal_welfare_tag: {
        tag_text: "Features Animals",
        msg_header: "This attraction features animals",
        msg_body: "Click below for expert advice on animal welfare in tourism.",
        learn_more_text: "Learn more",
        education_portal_url:
          "https://www.tripadvisor.com/blog/animal-welfare-education-portal/",
      },
    },
    reviews: [],
  },
  {
    type: "ATTRACTION",
    location_id: "631367",
    name: "Lalbagh Botanical Garden",
    latitude: "12.94848",
    longitude: "77.58657",
    num_reviews: "6179",
    timezone: "Asia/Kolkata",
    location_string: "Bengaluru, Bangalore District, Karnataka",
    photo: {
      images: {
        small: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/0c/7d/47/f4/lalbagh-botanical-garden.jpg",
          height: "141",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0c/7d/47/f4/lalbagh-botanical-garden.jpg",
          height: "50",
        },
        original: {
          width: "1600",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0c/7d/47/f4/lalbagh-botanical-garden.jpg",
          height: "901",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/0c/7d/47/f4/lalbagh-botanical-garden.jpg",
          height: "577",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0c/7d/47/f4/lalbagh-botanical-garden.jpg",
          height: "310",
        },
      },
      is_blessed: false,
      uploaded_date: "2016-08-11T23:10:23-0400",
      caption: "lalbagh botanical garden",
      id: "209537012",
      helpful_votes: "12",
      published_date: "2016-08-11T23:10:23-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/631367",
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2022",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2022_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2022",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2021",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2021",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2020",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2020",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2019",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2019",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2018",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2018",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2017",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2017",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2016",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2016",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2015",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2015",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2011",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2011_en_US-0-5.png",
        },
        categories: [],
        display_name: "Certificate of Excellence 2011",
      },
    ],
    location_subtype: "none",
    doubleclick_zone: "as.india.karnataka.bangalore",
    preferred_map_engine: "default",
    raw_ranking: "3.8096351623535156",
    ranking_geo: "Bengaluru",
    ranking_geo_id: "297628",
    ranking_position: "23",
    ranking_denominator: "371",
    ranking_category: "attraction",
    ranking_subcategory: "#23 of 371 things to do in Bengaluru",
    subcategory_ranking: "#23 of 371 things to do in Bengaluru",
    ranking: "#23 of 371 things to do in Bengaluru",
    distance: null,
    distance_string: null,
    bearing: null,
    rating: "4.0",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    description:
      "Welcome to The Art of Living International Centre! Situated on the top of the Panchagiri Hills, 36km southwest of Bangalore, near Udipalya village, the campus is an ideal location for reflection and rejuvenation.",
    web_url:
      "https://www.tripadvisor.com/Attraction_Review-g297628-d631367-Reviews-Lalbagh_Botanical_Garden-Bengaluru_Bangalore_District_Karnataka.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g297628-d631367-Lalbagh_Botanical_Garden-Bengaluru_Bangalore_District_Karnataka.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bengaluru",
        abbrv: null,
        location_id: "297628",
      },
      {
        subcategory: [
          {
            key: "district",
            name: "District",
          },
        ],
        name: "Bangalore District",
        abbrv: null,
        location_id: "12392950",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Karnataka",
        abbrv: null,
        location_id: "297627",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "India",
        abbrv: null,
        location_id: "293860",
      },
    ],
    category: {
      key: "attraction",
      name: "Attraction",
    },
    subcategory: [
      {
        key: "57",
        name: "Nature & Parks",
      },
    ],
    parent_display_name: "Bengaluru",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+91 98298 80841",
    website: "http://www.horticulture.kar.nic.in/lalbagh.htm",
    address_obj: {
      street1: "Lalbagh",
      street2: "",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      postalcode: "560004",
    },
    address: "Lalbagh, Bengaluru 560004 India",
    hours: {
      week_ranges: [
        [
          {
            open_time: 360,
            close_time: 1140,
          },
        ],
        [
          {
            open_time: 360,
            close_time: 1140,
          },
        ],
        [
          {
            open_time: 360,
            close_time: 1140,
          },
        ],
        [
          {
            open_time: 360,
            close_time: 1140,
          },
        ],
        [
          {
            open_time: 360,
            close_time: 1140,
          },
        ],
        [
          {
            open_time: 360,
            close_time: 1140,
          },
        ],
        [
          {
            open_time: 360,
            close_time: 1140,
          },
        ],
      ],
      timezone: "Asia/Kolkata",
    },
    is_candidate_for_contact_info_suppression: false,
    subtype: [
      {
        key: "58",
        name: "Gardens",
      },
    ],
    booking: {
      provider: "Viator",
      url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2FBangalore-attractions%2FLalbagh-Botanical-Gardens-tours-tickets%2Fd5310-a11671%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=5071adbe927608f68&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=631367&clt=TD&from=api&nt=true",
    },
    offer_group: {
      lowest_price: "$14.98",
      offer_list: [
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FPrivate-Full-Day-Tour-of-Bangalore-City%2Fd5310-34682P13%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=172fef612455e33cd&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=631367&clt=TD&from=api&nt=true",
          price: "$77.87",
          rounded_up_price: "$78",
          offer_type: "",
          title: " Private Full-Day Bangalore City Tour",
          product_code: "34682P13",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/d7/ba/ea.jpg",
          description: null,
          primary_category: "Private Sightseeing Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FCultural-tour-of-Bangalore-a-day-trip%2Fd5310-18983P13%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=08aa8502260aec3c0&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=631367&clt=TD&from=api&nt=true",
          price: "$95.00",
          rounded_up_price: "$95",
          offer_type: "",
          title: "Bangalore city tour with a guide in private car and lunch",
          product_code: "18983P13",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/72/4b/05.jpg",
          description: null,
          primary_category: "Cultural Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FLalbagh-Botanical-park-heritage-walk%2Fd5310-26623P8%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=d39eb40554e2b8975&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=3&cnt=1&geo=631367&clt=TD&from=api&nt=true",
          price: "$55.00",
          rounded_up_price: "$55",
          offer_type: "",
          title: "Lalbagh Botanical park heritage walk",
          product_code: "26623P8",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/70/56/ec.jpg",
          description: null,
          primary_category: "City Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FFull-Day-Private-Tour-of-Bangalore%2Fd5310-46765P3%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=39f73f5a7038e8964&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=4&cnt=1&geo=631367&clt=TD&from=api&nt=true",
          price: "$117.34",
          rounded_up_price: "$118",
          offer_type: "",
          title: "Bangalore Through the Ages - Full-Day Tour with Lunch",
          product_code: "46765P3",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/6c/70/1e.jpg",
          description: null,
          primary_category: "Bus & Minivan Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FGood-Morning-Bengaluru-Cycling-tour%2Fd5310-25838P23%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=4f5f32bf83b0ca1f9&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=5&cnt=1&geo=631367&clt=TD&from=api&nt=true",
          price: "$73.60",
          rounded_up_price: "$74",
          offer_type: "",
          title: "Good Morning Bengaluru - Cycling tour",
          product_code: "25838P23",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/0a/92/54/fa.jpg",
          description: null,
          primary_category: "Cultural Tours",
        },
      ],
      has_see_all_url: true,
      is_eligible_for_ap_list: true,
    },
    fee: "YES",
    tags: {},
    reviews: [],
  },
  {
    type: "ATTRACTION",
    location_id: "325159",
    name: "Bull Temple",
    latitude: "12.941853",
    longitude: "77.56795",
    num_reviews: "815",
    timezone: "Asia/Kolkata",
    location_string: "Bengaluru, Bangalore District, Karnataka",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/01/1f/a2/0b/bangalore.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/01/1f/a2/0b/bangalore.jpg",
          height: "50",
        },
        original: {
          width: "682",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/01/1f/a2/0b/bangalore.jpg",
          height: "512",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/01/1f/a2/0b/bangalore.jpg",
          height: "412",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/01/1f/a2/0b/bangalore.jpg",
          height: "187",
        },
      },
      is_blessed: true,
      uploaded_date: "2008-12-21T05:02:09-0500",
      caption: "Nandi Temple",
      id: "18850315",
      helpful_votes: "46",
      published_date: "2008-12-21T08:16:16-0500",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/325159",
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2020",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2020",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2019",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2019",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2018",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2018",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2017",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2017",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2016",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2016",
      },
    ],
    location_subtype: "none",
    doubleclick_zone: "as.india.karnataka.bangalore",
    preferred_map_engine: "default",
    raw_ranking: "3.7387802600860596",
    ranking_geo: "Bengaluru",
    ranking_geo_id: "297628",
    ranking_position: "27",
    ranking_denominator: "371",
    ranking_category: "attraction",
    ranking_subcategory: "#27 of 371 things to do in Bengaluru",
    subcategory_ranking: "#27 of 371 things to do in Bengaluru",
    ranking: "#27 of 371 things to do in Bengaluru",
    distance: null,
    distance_string: null,
    bearing: null,
    rating: "4.0",
    is_closed: false,
    open_now_text: "Closed Now",
    is_long_closed: false,
    neighborhood_info: [
      {
        location_id: "13087486",
        name: "Basavangudi",
      },
    ],
    description:
      "Located in Basavanagudi, this temple (built by Kempegowda in the Dravidian style) contains a huge granite monolith of Nandi. The temple grounds also host the annual groundnut fair in November/December. ",
    web_url:
      "https://www.tripadvisor.com/Attraction_Review-g297628-d325159-Reviews-Bull_Temple-Bengaluru_Bangalore_District_Karnataka.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g297628-d325159-Bull_Temple-Bengaluru_Bangalore_District_Karnataka.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bengaluru",
        abbrv: null,
        location_id: "297628",
      },
      {
        subcategory: [
          {
            key: "district",
            name: "District",
          },
        ],
        name: "Bangalore District",
        abbrv: null,
        location_id: "12392950",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Karnataka",
        abbrv: null,
        location_id: "297627",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "India",
        abbrv: null,
        location_id: "293860",
      },
    ],
    category: {
      key: "attraction",
      name: "Attraction",
    },
    subcategory: [
      {
        key: "47",
        name: "Sights & Landmarks",
      },
    ],
    parent_display_name: "Bengaluru",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+91 94380 54636",
    website:
      "http://www.bangalorebest.com/WondersOfBangalore/BullTemple_Bangalore.php",
    address_obj: {
      street1: "Bugle Hill, Bull Temple Rd, Basavangudi",
      street2: "",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      postalcode: "560004",
    },
    address: "Bugle Hill, Bull Temple Rd, Basavangudi, Bengaluru 560004 India",
    hours: {
      week_ranges: [
        [
          {
            open_time: 390,
            close_time: 510,
          },
        ],
        [
          {
            open_time: 390,
            close_time: 510,
          },
        ],
        [
          {
            open_time: 390,
            close_time: 510,
          },
        ],
        [
          {
            open_time: 390,
            close_time: 510,
          },
        ],
        [
          {
            open_time: 390,
            close_time: 510,
          },
        ],
        [
          {
            open_time: 390,
            close_time: 510,
          },
        ],
        [
          {
            open_time: 390,
            close_time: 510,
          },
        ],
      ],
      timezone: "Asia/Kolkata",
    },
    is_candidate_for_contact_info_suppression: false,
    subtype: [
      {
        key: "3",
        name: "Architectural Buildings",
      },
      {
        key: "10",
        name: "Sacred & Religious Sites",
      },
    ],
    booking: {
      provider: "Viator",
      url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2FBangalore-attractions%2FBull-Temple-Nandi-Temple-tours-tickets%2Fd5310-a11698%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=1afda3df0f9d272a4&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=325159&clt=TD&from=api&nt=true",
    },
    offer_group: {
      lowest_price: "$12.73",
      offer_list: [
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FPrivate-Full-Day-Tour-of-Bangalore-City%2Fd5310-34682P13%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=172fef612455e33cd&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=325159&clt=TD&from=api&nt=true",
          price: "$77.87",
          rounded_up_price: "$78",
          offer_type: "",
          title: " Private Full-Day Bangalore City Tour",
          product_code: "34682P13",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/d7/ba/ea.jpg",
          description: null,
          primary_category: "Private Sightseeing Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FCultural-tour-of-Bangalore-a-day-trip%2Fd5310-18983P13%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=08aa8502260aec3c0&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=325159&clt=TD&from=api&nt=true",
          price: "$95.00",
          rounded_up_price: "$95",
          offer_type: "",
          title: "Bangalore city tour with a guide in private car and lunch",
          product_code: "18983P13",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/72/4b/05.jpg",
          description: null,
          primary_category: "Cultural Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FBest-of-Bangalore-Private-Tour%2Fd5310-21342P8%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=93279e3b251902d5b&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=3&cnt=1&geo=325159&clt=TD&from=api&nt=true",
          price: "$99.00",
          rounded_up_price: "$99",
          offer_type: "",
          title: "Best of Bangalore Private Tour",
          product_code: "21342P8",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/6f/58/32.jpg",
          description: null,
          primary_category: "Private Sightseeing Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FGood-Morning-Bengaluru-Cycling-tour%2Fd5310-25838P23%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=4f5f32bf83b0ca1f9&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=4&cnt=1&geo=325159&clt=TD&from=api&nt=true",
          price: "$73.60",
          rounded_up_price: "$74",
          offer_type: "",
          title: "Good Morning Bengaluru - Cycling tour",
          product_code: "25838P23",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/0a/92/54/fa.jpg",
          description: null,
          primary_category: "Cultural Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FBangalore-Full-Day-Private-Tour%2Fd5310-144293P2%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=8722e97eadeb69e4b&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=5&cnt=1&geo=325159&clt=TD&from=api&nt=true",
          price: "$83.20",
          rounded_up_price: "$84",
          offer_type: "",
          title: "Bangalore - Full Day Private Tour",
          product_code: "144293P2",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/80/ec/78.jpg",
          description: null,
          primary_category: "Cultural Tours",
        },
      ],
      has_see_all_url: true,
      is_eligible_for_ap_list: true,
    },
    fee: "NO",
    tags: {},
    reviews: [],
  },
  {
    type: "ATTRACTION",
    location_id: "1006969",
    name: "Bannerghatta National Park",
    latitude: "12.90092",
    longitude: "77.60105",
    num_reviews: "2941",
    timezone: "Asia/Kolkata",
    location_string: "Bengaluru, Bangalore District, Karnataka",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0c/bb/93/c2/photo1jpg.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0c/bb/93/c2/photo1jpg.jpg",
          height: "50",
        },
        original: {
          width: "2048",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0c/bb/93/c2/photo1jpg.jpg",
          height: "1536",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/93/c2/photo1jpg.jpg",
          height: "413",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/0c/bb/93/c2/photo1jpg.jpg",
          height: "188",
        },
      },
      is_blessed: false,
      uploaded_date: "2016-08-28T08:33:40-0400",
      caption: "",
      id: "213619650",
      helpful_votes: "1",
      published_date: "2016-08-28T08:33:40-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/1006969",
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2021",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2021",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2020",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2020",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2017",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2017",
      },
    ],
    location_subtype: "none",
    doubleclick_zone: "as.india.karnataka.bangalore",
    preferred_map_engine: "default",
    raw_ranking: "3.640200138092041",
    ranking_geo: "Bengaluru",
    ranking_geo_id: "297628",
    ranking_position: "32",
    ranking_denominator: "371",
    ranking_category: "attraction",
    ranking_subcategory: "#32 of 371 things to do in Bengaluru",
    subcategory_ranking: "#32 of 371 things to do in Bengaluru",
    ranking: "#32 of 371 things to do in Bengaluru",
    distance: null,
    distance_string: null,
    bearing: null,
    rating: "4.0",
    is_closed: false,
    is_long_closed: false,
    neighborhood_info: [
      {
        location_id: "13087496",
        name: "J.P. Nagar",
      },
    ],
    description:
      "Courses are held in various rooms at different levels of the mantap and satsangs are held on the main level. Each level opens onto a gallery. Following a circular design, the levels provide an excellent view of the campus grounds and the open grounds and hills in the distance. ",
    web_url:
      "https://www.tripadvisor.com/Attraction_Review-g297628-d1006969-Reviews-Bannerghatta_National_Park-Bengaluru_Bangalore_District_Karnataka.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g297628-d1006969-Bannerghatta_National_Park-Bengaluru_Bangalore_District_Karnataka.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bengaluru",
        abbrv: null,
        location_id: "297628",
      },
      {
        subcategory: [
          {
            key: "district",
            name: "District",
          },
        ],
        name: "Bangalore District",
        abbrv: null,
        location_id: "12392950",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Karnataka",
        abbrv: null,
        location_id: "297627",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "India",
        abbrv: null,
        location_id: "293860",
      },
    ],
    category: {
      key: "attraction",
      name: "Attraction",
    },
    subcategory: [
      {
        key: "57",
        name: "Nature & Parks",
      },
    ],
    parent_display_name: "Bengaluru",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+91 88949 17116",
    website: "http://bannerghattabiologicalpark.org/",
    email: "dcf@bannerghattabiopark.org",
    address_obj: {
      street1: "Bannerghatta Road",
      street2: "Bannerghatta",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      postalcode: "",
    },
    address: "Bannerghatta Road Bannerghatta, Bengaluru India",
    is_candidate_for_contact_info_suppression: false,
    subtype: [
      {
        key: "68",
        name: "Nature & Wildlife Areas",
      },
    ],
    booking: {
      provider: "Viator",
      url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2FBangalore-attractions%2FBannerghatta-National-Park-tours-tickets%2Fd5310-a14950%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=6b09fff82f6232d54&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=1006969&clt=TD&from=api&nt=true",
    },
    offer_group: {
      lowest_price: "$2.12",
      offer_list: [
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FELEPHANT-CORRIDOR-CYCLE-TRAIL%2Fd5310-162050P2%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=5506415c1b8b3a20c&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=1006969&clt=TD&from=api&nt=true",
          price: "$212.27",
          rounded_up_price: "$213",
          offer_type: "",
          title: "Bannerghatta Cycle Trail",
          product_code: "162050P2",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/a8/14/12.jpg",
          description: null,
          primary_category: "Bike & Mountain Bike Tours",
        },
      ],
      has_see_all_url: true,
      is_eligible_for_ap_list: false,
    },
    fee: "YES",
    animal_welfare_tag: {
      tag_text: "Features Animals",
      msg_header: "This attraction features animals",
      msg_body: "Click below for expert advice on animal welfare in tourism.",
      learn_more_text: "Learn more",
      education_portal_url:
        "https://www.tripadvisor.com/blog/animal-welfare-education-portal/",
    },
    tags: {
      animal_welfare_tag: {
        tag_text: "Features Animals",
        msg_header: "This attraction features animals",
        msg_body: "Click below for expert advice on animal welfare in tourism.",
        learn_more_text: "Learn more",
        education_portal_url:
          "https://www.tripadvisor.com/blog/animal-welfare-education-portal/",
      },
    },
    reviews: [],
  },
  {
    type: "ATTRACTION",
    location_id: "1603947",
    name: "Wonderla Amusement Park",
    latitude: "12.835173",
    longitude: "77.4011",
    num_reviews: "4244",
    timezone: "Asia/Kolkata",
    location_string: "Bengaluru, Bangalore District, Karnataka",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0f/b4/a3/6d/recoil-india-s-first.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0f/b4/a3/6d/recoil-india-s-first.jpg",
          height: "50",
        },
        original: {
          width: "1417",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0f/b4/a3/6d/recoil-india-s-first.jpg",
          height: "992",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/0f/b4/a3/6d/recoil-india-s-first.jpg",
          height: "716",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0f/b4/a3/6d/recoil-india-s-first.jpg",
          height: "385",
        },
      },
      is_blessed: true,
      uploaded_date: "2017-06-28T03:07:57-0400",
      caption: "Recoil, India's First Reverse Looping Roller Coaster",
      id: "263496557",
      helpful_votes: "43",
      published_date: "2017-06-28T03:07:57-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/1603947",
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2020",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2020",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2019",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2019",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2018",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2018",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2017",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2017",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2016",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2016",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2015",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2015",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2014",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2014_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2014",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2013",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2013_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2013",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2012",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2012_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2012",
      },
    ],
    location_subtype: "none",
    doubleclick_zone: "as.india.karnataka.bangalore",
    preferred_map_engine: "default",
    raw_ranking: "3.81695818901062",
    ranking_geo: "Bengaluru",
    ranking_geo_id: "297628",
    ranking_position: "21",
    ranking_denominator: "371",
    ranking_category: "attraction",
    ranking_subcategory: "#21 of 371 things to do in Bengaluru",
    subcategory_ranking: "#21 of 371 things to do in Bengaluru",
    ranking: "#21 of 371 things to do in Bengaluru",
    distance: null,
    distance_string: null,
    bearing: null,
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    description:
      "Wonderla Holidays Limited, is the No. 1 amusement park operator in India. Promoted by Arun K.lorem19 ",
    web_url:
      "https://www.tripadvisor.com/Attraction_Review-g297628-d1603947-Reviews-Wonderla_Amusement_Park-Bengaluru_Bangalore_District_Karnataka.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g297628-d1603947-Wonderla_Amusement_Park-Bengaluru_Bangalore_District_Karnataka.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bengaluru",
        abbrv: null,
        location_id: "297628",
      },
      {
        subcategory: [
          {
            key: "district",
            name: "District",
          },
        ],
        name: "Bangalore District",
        abbrv: null,
        location_id: "12392950",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Karnataka",
        abbrv: null,
        location_id: "297627",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "India",
        abbrv: null,
        location_id: "293860",
      },
    ],
    category: {
      key: "attraction",
      name: "Attraction",
    },
    subcategory: [
      {
        key: "52",
        name: "Water & Amusement Parks",
      },
    ],
    parent_display_name: "Bengaluru",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+91 99455 57777",
    website: "http://www.wonderla.com/",
    email: "mail.blr@wonderla.com",
    address_obj: {
      street1: "28th km Mysore Road",
      street2: "",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      postalcode: "562109",
    },
    address: "28th km Mysore Road, Bengaluru 562109 India",
    hours: {
      week_ranges: [
        [
          {
            open_time: 660,
            close_time: 1140,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1080,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1080,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1080,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1080,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1080,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1140,
          },
        ],
      ],
      timezone: "Asia/Kolkata",
    },
    is_candidate_for_contact_info_suppression: false,
    subtype: [
      {
        key: "98",
        name: "Theme Parks",
      },
    ],
    booking: {
      provider: "Viator",
      url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FBangalore-Experiences%2Fd5310-145545P1%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=7c60c1cd335fa45ef&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=1603947&clt=TD&from=api&nt=true",
    },
    offer_group: {
      lowest_price: "$3.73",
      offer_list: [
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FBangalore-Experiences%2Fd5310-145545P1%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=7c60c1cd335fa45ef&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=1603947&clt=TD&from=api&nt=true",
          price: "$373.34",
          rounded_up_price: "$374",
          offer_type: "",
          title: "Bangalore Experiences!",
          product_code: "145545P1",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/7f/b2/90.jpg",
          description: null,
          primary_category: "Cultural Tours",
        },
      ],
      has_see_all_url: true,
      is_eligible_for_ap_list: false,
    },
    fee: "YES",
    tags: {},
    reviews: [],
  },
  {
    type: "ATTRACTION",
    location_id: "2587719",
    name: "Visvesvaraya Industrial and Technological Museum",
    latitude: "12.974961",
    longitude: "77.59645",
    num_reviews: "1758",
    timezone: "Asia/Kolkata",
    location_string: "Bengaluru, Bangalore District, Karnataka",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/13/c9/fb/65/visvesvaraya-industrial.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/13/c9/fb/65/visvesvaraya-industrial.jpg",
          height: "50",
        },
        original: {
          width: "1280",
          url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/13/c9/fb/65/visvesvaraya-industrial.jpg",
          height: "960",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/13/c9/fb/65/visvesvaraya-industrial.jpg",
          height: "412",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/13/c9/fb/65/visvesvaraya-industrial.jpg",
          height: "188",
        },
      },
      is_blessed: false,
      uploaded_date: "2018-07-21T09:38:06-0400",
      caption: "",
      id: "332004197",
      helpful_votes: "7",
      published_date: "2018-07-21T09:38:06-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/2587719",
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2020",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2020",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2019",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2019",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2018",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2018",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2017",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2017",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2016",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2016",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2015",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2015",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2014",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2014_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2014",
      },
    ],
    location_subtype: "none",
    doubleclick_zone: "as.india.karnataka.bangalore",
    preferred_map_engine: "default",
    raw_ranking: "3.9427781105041504",
    ranking_geo: "Bengaluru",
    ranking_geo_id: "297628",
    ranking_position: "8",
    ranking_denominator: "371",
    ranking_category: "attraction",
    ranking_subcategory: "#8 of 371 things to do in Bengaluru",
    subcategory_ranking: "#8 of 371 things to do in Bengaluru",
    ranking: "#8 of 371 things to do in Bengaluru",
    distance: null,
    distance_string: null,
    bearing: null,
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    neighborhood_info: [
      {
        location_id: "13087462",
        name: "Cubbon Park",
      },
    ],
    description:
      "Visvesvaraya Museum is fun for children and adults. It houses a treasure trove of machines and artifacts related to science and technology.",
    web_url:
      "https://www.tripadvisor.com/Attraction_Review-g297628-d2587719-Reviews-Visvesvaraya_Industrial_and_Technological_Museum-Bengaluru_Bangalore_District_Kar.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g297628-d2587719-Visvesvaraya_Industrial_and_Technological_Museum-Bengaluru_Bangalore_District_Karnataka.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bengaluru",
        abbrv: null,
        location_id: "297628",
      },
      {
        subcategory: [
          {
            key: "district",
            name: "District",
          },
        ],
        name: "Bangalore District",
        abbrv: null,
        location_id: "12392950",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Karnataka",
        abbrv: null,
        location_id: "297627",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "India",
        abbrv: null,
        location_id: "293860",
      },
    ],
    category: {
      key: "attraction",
      name: "Attraction",
    },
    subcategory: [
      {
        key: "49",
        name: "Museums",
      },
    ],
    parent_display_name: "Bengaluru",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+91 80 2286 6200",
    website: "http://www.vismuseum.gov.in/",
    email: "vitmuseum@gmail.com",
    address_obj: {
      street1: "5216 Kasthurba Road",
      street2: "Cubbon Park, Gandhi Nagar",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      postalcode: "560001",
    },
    address:
      "5216 Kasthurba Road Cubbon Park, Gandhi Nagar, Bengaluru 560001 India",
    hours: {
      week_ranges: [
        [
          {
            open_time: 570,
            close_time: 1080,
          },
        ],
        [
          {
            open_time: 570,
            close_time: 1080,
          },
        ],
        [
          {
            open_time: 570,
            close_time: 1080,
          },
        ],
        [
          {
            open_time: 570,
            close_time: 1080,
          },
        ],
        [
          {
            open_time: 570,
            close_time: 1080,
          },
        ],
        [
          {
            open_time: 570,
            close_time: 1080,
          },
        ],
        [
          {
            open_time: 570,
            close_time: 1080,
          },
        ],
      ],
      timezone: "Asia/Kolkata",
    },
    is_candidate_for_contact_info_suppression: false,
    subtype: [
      {
        key: "35",
        name: "Science Museums",
      },
    ],
    booking: {
      provider: "Viator",
      url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FFree-Walking-Tour-Bangalore%2Fd5310-73045P126%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=44a607f94f7735699&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=2587719&clt=TD&from=api&nt=true",
    },
    offer_group: {
      lowest_price: "$0.00",
      offer_list: [
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FFree-Walking-Tour-Bangalore%2Fd5310-73045P126%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=44a607f94f7735699&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=2587719&clt=TD&from=api&nt=true",
          price: "$11.72",
          rounded_up_price: "$12",
          offer_type: "",
          title: "Bangalore Walking Tour ",
          product_code: "73045P126",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/09/db/89/31.jpg",
          description: null,
          primary_category: "Cultural Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2F8-Hour-Custom-Private-Tour-of-Bengaluru%2Fd5310-7325P54%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=7fefe436a4445bb52&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=2587719&clt=TD&from=api&nt=true",
          price: "$139.00",
          rounded_up_price: "$139",
          offer_type: "",
          title: "8-Hour Custom Private Tour of Bengaluru",
          product_code: "7325P54",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/74/2e/fc.jpg",
          description: null,
          primary_category: "Bus & Minivan Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FBangalore-Full-Day-Private-Tour%2Fd5310-144293P2%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=8722e97eadeb69e4b&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=3&cnt=1&geo=2587719&clt=TD&from=api&nt=true",
          price: "$83.20",
          rounded_up_price: "$84",
          offer_type: "",
          title: "Bangalore - Full Day Private Tour",
          product_code: "144293P2",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/80/ec/78.jpg",
          description: null,
          primary_category: "Cultural Tours",
        },
        {
          url: "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FBangalore%2FPrivate-Half-Day-Tour-of-Bangalore%2Fd5310-15041P12%3Feap%3Dtripadvisor-main-11383%26aid%3Dtripen1&partnerKey=1&urlKey=17bb54be44995a884&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=4&cnt=1&geo=2587719&clt=TD&from=api&nt=true",
          price: "$106.67",
          rounded_up_price: "$107",
          offer_type: "",
          title: "Private Half-Day Tour of Bangalore",
          product_code: "15041P12",
          partner: "Viator",
          image_url:
            "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/6b/68/8c.jpg",
          description: null,
          primary_category: "Half-day Tours",
        },
      ],
      has_see_all_url: true,
      is_eligible_for_ap_list: true,
    },
    tags: {},
    reviews: [],
  },
];
console.log(data2);
data2.forEach(function (ele) {
  let father = document.getElementById("main4");
  let a = document.createElement("a")
  a.setAttribute("href","./dispalydata.html")
  let child = document.createElement("div");
  child.setAttribute("id", "class1");

  let Image = document.createElement("img");
  Image.src = ele.photo.images.large.url;
 
  let name = document.createElement("h2");
  name.innerText = ele.name;
  let user = document.createElement("p");
  user.setAttribute("class","user")
  user.innerText = ele.subtype[0].name;

  let Type = document.createElement("p");
  Type.innerText ="By"+" "+ "Half Day Tour";

  let Dis = document.createElement("p");
  Dis.innerText = ele.description;
 
  // console.log(Dis);

  //  btn.addEventListener("click")
   let btn = document.createElement("button")
   btn.innerText="Seemore"
   btn.setAttribute("id","btn")
  child.append(Image, name, user, Type, Dis);
  a.append(child)
  console.log(a)
  father.append(a)
});





let count = 0;

let myData = () => {
  let container = document.querySelector(".kaka");
  let arrow = document.getElementById("arrow");
  if (count % 2 === 0) {
    console.log("hello");
    let div = document.createElement("div");
    div.innerText = `We'll start by reviewing your resume. We love unique backgrounds so don't count yourself out if your experience doesn't perfectly match the job description - use the application to highlight why you're the right person for the job!

        Include anything that you think showcases your skills - LinkedIn, GitHub, portfolio, websites, etc.`;
    container.append(div);
    count++;
  } else {
    container.innerHTML = null;
    count++;
  }
};
document.querySelector("#myid").addEventListener("click", myData);

////////////////////////////

let count1 = 0;

let myData1 = () => {
  let container1 = document.querySelector(".kaka1");
  let arrow = document.getElementById("arrow");
  if (count1 % 2 === 0) {
    console.log("hello");
    let div = document.createElement("div");
    div.innerText = `We'll work with you to schedule a meeting - over coffee if you're in SF or a phone call if you're remote.

        This is your chance to tell us what you're passionate about, your accomplishments, and what kind of challenges you're looking for.
        
        Depending on the role, there may be more than one chat scheduled.
        
        Tip: feel free to dress casually for the interview - we do in the office!`;
    container1.append(div);
    count1++;
  } else {
    container1.innerHTML = null;
    count1++;
  }
};
document.querySelector("#myid1").addEventListener("click", myData1);

////////////////////////////////////////

let count2 = 0;

let mydata2 = () => {
  let container2 = document.querySelector(".kaka2");
  let arrow = document.getElementById("arrow");
  if (count2 % 2 === 0) {
    console.log("hello");
    let div = document.createElement("div");
    div.innerText = `We've designed role-specific, realistic challenges to better understand how you work, and for you to sample what the job looks like.

        Depending on the position you're applying for these can be sales related, drafting emails, writing code, design samples, etc.`;
    container2.append(div);
    count2++;
  } else {
    container2.innerHTML = null;
    count2++;
  }
};
document.querySelector("#myid2").addEventListener("click", mydata2);

///////////////////////

let count3 = 0;

let mydata3 = () => {
  let container2 = document.querySelector(".kaka3");
  let arrow = document.getElementById("arrow");
  if (count3 % 2 === 0) {
    console.log("hello");
    let div = document.createElement("div");
    div.innerText = `Sit down (or Zoom meet) with several members of the team you'd be working with for a 30-60 minute collaborative discussion.

        Often, these meetings will start off with a 10 minute presentation about an assigned topic relevant to your job, the rest of the time is a two way conversation about how you work and what your goals are. Bring lots of questions - you're interviewing us as well!`;
    container2.append(div);
    count3++;
  } else {
    container2.innerHTML = null;
    count3++;
  }
};
document.querySelector("#myid3").addEventListener("click", mydata3);

///////////////////////

let count4 = 0;

let mydata4 = () => {
  let container2 = document.querySelector(".kaka4");
  let arrow = document.getElementById("arrow");
  if (count4 % 2 === 0) {
    console.log("hello");
    let div = document.createElement("div");
    div.innerText = `We like to hear from people who've worked with you in your current role, or past positions - ideally a previous supervisor.

        Once we're confident that we have a fit, we move fast to send out an official offer letter!`;
    container2.append(div);
    count4++;
  } else {
    container2.innerHTML = null;
    count4++;
  }
};
document.querySelector("#myid4").addEventListener("click", mydata4);

///////////////////////

let count5 = 0;

let mydata5 = () => {
  let container2 = document.querySelector(".kaka5");
  let arrow = document.getElementById("arrow");
  if (count5 % 2 === 0) {
    console.log("hello");
    let div = document.createElement("div");
    div.innerText = `We like to hear from people who've worked with you in your current role, or past positions - ideally a previous supervisor.

        Once we're confident that we have a fit, we move fast to send out an official offer letter!`;
    container2.append(div);
    count5++;
  } else {
    container2.innerHTML = null;
    count5++;
  }
};
document.querySelector("#myid5").addEventListener("click", mydata5);

///////////////////////

let count6 = 0;

let mydata6 = () => {
  let container2 = document.querySelector(".kaka6");
  let arrow = document.getElementById("arrow");
  if (count6 % 2 === 0) {
    console.log("hello");
    let div = document.createElement("div");
    div.innerText = `During your first week, your managers will fly out to you and you'll spend the first days meeting the entire team and learning about AirGarage`;
    container2.append(div);
    count6++;
  } else {
    container2.innerHTML = null;
    count6++;
  }
};
document.querySelector("#myid6").addEventListener("click", mydata6);
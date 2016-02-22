![script2Bit icon][logo]
[logo]:http://celestialprophecy.github.io/script2Bit/img//script2Bit_logo.png "script2Bit logo"
# script2Bit
** making Call Sheets and Production Reports Fast, Easy, and Free**    
___
    script2Bit is a script conversion and scheduling software for film makers and producers.        

## Synopsis
We are building an automation tool for film makers and producers that creates scheduling agents from **a movie script**. This tool efficiently breaks down a script into components for use in creating call sheets, SMS, email notices and other vital elements of movie production. 

## Motivation

Film makers often cite the biggest challenge in productions as building schedules from movie scripts. Our tool will reduce the manual data entry of call sheets, and will automatically notify cast and crew members when they are needed on set.

## Usage

### script2Bit converts screenplays into call sheets.
For example, you wrote a script: Titled [Big Fish](http://fountain.io/_downloads/Big-Fish.fountain). See this sample project for a simple demonstration of how the script conversion works:

1. You Login to our awesome script2Bit:
![Login icon][login] **Login**

[login]: http://celestialprophecy.github.io/script2Bit/img/screenshot/script2Bit-login.jpg "Login Page"
2. Start uploading or pasting your script into the nice looking interface:
![Upload icon][upload] **Upload**

[upload]: http://celestialprophecy.github.io/script2Bit/img/screenshot/script2Bit-upload-script.jpg "Login Page"
3. Let script2Bit do it's itsy bitsy magic:
![Breakdown icon][breakdown] **Breakdown**

[breakdown]: http://celestialprophecy.github.io/script2Bit/img/screenshot/script2Bit-script-breakdown.jpg "Breakdown Page"
4. Enjoy!
![Contact icon][contact] **Contact**

[contact]: http://celestialprophecy.github.io/script2Bit/img/screenshot/script2Bit-contact.jpg "Contact Page"


So it's almost like 1-2-3, except with an addition of step number 4.

### script2Bit sends text/email notifications to your cast and crew.
So, now you have cast and crew lined up ready to go for movie production and waiting for you to give them marching order. Here's the process to do that:

1. Login to script2Bit:
![Login icon][login] **Login**

[login]: http://celestialprophecy.github.io/script2Bit/img/screenshot/script2Bit-login.jpg "Login Page"
2. Select the script:
![Breakdown icon][breakdown] **Breakdown**

[breakdown]: http://celestialprophecy.github.io/script2Bit/img/screenshot/script2Bit-script-breakdown.jpg "Breakdown Page"
3. March!
![Contact icon][contact] **Contact**

[contact]: http://celestialprophecy.github.io/script2Bit/img/screenshot/script2Bit-contact.jpg "Contact Page"

It super simple and fun, right? 
So, stop worrying and start creating, and let us do the heavy lifting. Let us know if you need other modules to help movie productions as well.

## Code Example

From this 
[Big Fish](http://fountain.io/_downloads/Big-Fish.fountain) script

to this

```
{  
   "title_page":{  
      "title":[  
         "Big Fish"
      ],
      "credit":[  
         "written by"
      ],
      "authors":[  
         "John August"
      ],
      "source":[  
         "based on the novel by Daniel Wallace"
      ],
      "notes":[  
         "FINAL PRODUCTION DRAFT<br />includes post-production dialogue <br />and omitted scenes"
      ],
      "copyright":[  
         "(c) 2003 Columbia Pictures"
      ]
   },
   "script":[  
      {  
         "headings":[  
            {  
               "heading":"EXT.  RIVER / UNDERWATER - DAY"
            }
         ],
         "actions":[  
            "A fat and happy catfish swims towards us.",
            "The fish passes us with a SPLASH.",
            "<span class=\"bold underline\">THE END</span>"
         ],
         "dialogue":[  
            {  
               "characters":[  
                  {  
                     "type":"character",
                     "name":"WILL (V.O.)",
                     "dialogue":[  
                        {  
                           "type":"dialogue",
                           "text":"And in that way, he becomes immortal."
                        }
                     ]
                  }
               ]
            }
         ]
      }
   ],
   "title":"Big Fish"
}
```



## Installation

1. `git clone` or extract web folder inside repo (that is the complete angular project)
2. `npm install`
3. `sudo npm install -g grunt-cli`
4. `npm install bower`
5. `bower install`
6. `grunt serve`

### Tips and Troubleshooting
* If you are having trouble with using script2Bit or having an idea for awesome feature, please [contact us](https://github.com/CelestialProphecy/script2Bit#contact)
* If you encounter errors during installation, try understand the error first.
* Google and online forums such as stackoverflow are the best bet for solutions
* These are what works for me:
	* Try running it using `sudo`
	* Try installing the latest/stable version of node.js and npm:
		* [Node Upgrade](http://stackoverflow.com/questions/10075990/upgrading-node-js-to-latest-version "Node Upgrade")
		* [NPM Upgrade](http://stackoverflow.com/questions/6237295/how-can-i-update-node-js-and-npm-to-the-next-versions "NPM Upgrade")
* If none of the above works, please contact us and we'll try to help you out.

### Web

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

#### Build & development

Run `grunt` for building and `grunt serve` for preview.

#### Testing

Running `grunt test` will run the unit tests with karma.


## Reference

### Koding

Get developers up & running on any project, from anywhere in just 5 minutes with Koding for Teams.
For more details on Koding see [Koding.com][koding]
[koding]: https://koding.com/

### Fountain.io

**Fountain** is a simple markup syntax that allows screenplays to be written, edited, and shared in plain, human-readable text. Fountain allows you to work on your screenplay anywhere, on any computer, using any software that edits text files.
For more details on Fountain see [Fountain.io][fountain]  
[fountain]: http://fountain.io.

### Twillio

**Twillio** is a cloud communications platform.
For more details on Twillio see [Twillio][twillio]
[twillio]: https://www.twilio.com/

### Sample Screenplay Page
![Sample Screenplay Page][screenplay]

[screenplay]: https://www.writersstore.com/system/imagemanager/sample-screenplay-page.gif "Sample Screenplay Page"

### Call Sheet Template
![Call Sheet Template][call sheet]

[call sheet]: http://nofilmschool.com/wp-content/uploads/2014/05/small-call-sheet-template.jpg "Call Sheet Template"

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Share your success story with us please! :)

## Contact
Let us know how you would like to dive into the project and collaborate with us:
<hackathon@Studivo.com>

## Squad Team

![Budi Mulyo icon][Budi] **Budi Mulyo, Movie Producer, Maker, and Roboticist**

[Budi]: http://celestialprophecy.github.io/script2Bit/img/team/01.png "Budi Mulyo"
___
![Rajat Nigam icon][Rajat] **Rajat Nigam, Software Engineer, Brother of Vaibhav, Lover of Magic**

[Rajat]: http://celestialprophecy.github.io/script2Bit/img/team/02.png "Rajat Nigam"

___
![Vaibhav Nigam icon][Vaibhav] **Vaibhav Nigam, Software Engineer, Brother of Rajat, Rangoli Artist**

[Vaibhav]: http://celestialprophecy.github.io/script2Bit/img/team/03.png "Vaibhav Nigam"

___
![Archis Gore icon][Archis] **Archis Gore, Technologist,Entrepreneur (CTO of [Polyverse](https://www.facebook.com/Polyverse-181771615496034/)), Avid Diver, Dancer, Cook, Filmmaker, etc**

[Archis]: http://celestialprophecy.github.io/script2Bit/img/team/04.png "Archis Gore"



## Credits

* *Script graphic by <a href="http://picol.org">Picol</a> and Two graphic by <a href="http://www.freepik.com/">Freepik</a> from <a href="http://www.flaticon.com/">Flaticon</a> are licensed under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>. Made with <a href="http://logomakr.com" title="Logo Maker">Logo Maker</a>*

* *Sample Screenplay Page by <a href="https://www.writersstore.com/how-to-write-a-screenplay-a-guide-to-scriptwriting/">Writers Store</a> "How to Write a Screenplay: Script Example & Screenwriting Tips"
by <a href="https://www.writersstore.com/authors/mario-o-moreno/">Mario O. Moreno</a> and <a href="https://www.writersstore.com/staff/kay-tuxford/">Kay Tuxford</a>*

* *The Call Sheet Template by <a href="http://nofilmschool.com/2014/05/download-free-call-sheet-template-cast-crew-call">No Film School</a> "Download a Free Call Sheet Template to Get Your Film Crew on the Same Page" by <a href="http://nofilmschool.com/u/joemarine">Joe Marine</a>*


## License
All code is copyright Studivo, LLC. Released under an MIT license. Do whatever you want with this code, but it would be super cool if you shared your improvements with the world.

See the included [LICENSE](http://celestialprophecy.github.io/script2Bit/LICENSE "License") file for legal jargon.
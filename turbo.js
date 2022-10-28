class turbo { 

   getInfo () { 

     return { 

       id: 'turbo', 

       name: 'Turbo', 

       blocks: [ 

         { 

           opcode: 'textget', 

           blockType: Scratch.BlockType.REPORTER, 

           text: 'Get Text From [URL]', 

           arguments: { 

             URL: { 

               type: Scratch.ArgumentType.STRING, 

               defaultValue: 'https://extensions.turbowarp.org/hello.txt' 

             } 

           } 

         } 

       ] 

     }; 

   } 

  

   get (args) { 

     return turbo(args.URL) 

       .then(r => r.text()) 

       .catch(() => ''); 

   } 

 } 

  

 Scratch.extensions.register(new turbo());

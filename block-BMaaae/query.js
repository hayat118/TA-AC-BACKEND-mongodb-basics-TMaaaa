db.cricket.insertMany(players)
db.football.insertMany(players)
db.TT.insertMany(players)

db.TT.renameCollection('tennis')

db.createCollection('khokho',{capped:true,size:1024,max:3})
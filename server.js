const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const schema = require('./schema')
const Graphql = require('graphql')

const app = new Koa()

app.use(bodyParser());

app.use( async ( ctx ) => {
    let url = ctx.request.url
    if(url=='/graphql'){

        console.log(ctx.request.body.qq)
        
        Graphql.graphql(schema, ctx.request.body.qq)
        .then((result) => {
            ctx.body =JSON.stringify(result, null, 2);
        })

    }else{
        ctx.body = 'hello koa3'
    }
})
app.listen(3333)
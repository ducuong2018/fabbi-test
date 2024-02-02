import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { TrackModule } from './tracks/track.module';
import { AlbumModule } from './albums/album.module';
import { ArtistModule } from './artists/artist.module';
import { FavoritesModule } from './favorites/favorites.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    TrackModule,
    AlbumModule,
    ArtistModule,
    FavoritesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

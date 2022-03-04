import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

class User extends Model {
  static table = 'users'

  @field('user_id')
  user_id!: string;
  
  @field('name_title')
  name_title!: string;

  @field('name_first')
  name_first!: string;

  @field('name_last')
  name_last!: string;

  @field('picture_thumbnail')
  picture_thumbnail!: string;

  @field('picture_large')
  picture_large!: string;

  @field('gender')
  gender!: string;

  @field('email')
  email!: string;

  @field('location_city')
  location_city!: string;

  @field('location_state')
  location_state!: string;

  @field('location_country')
  location_country!: string;

  @field('phone')
  phone!: string;

  @field('cell')
  cell!: string;
}

export { User}
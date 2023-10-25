package com.ssafy.dingdong.domain.room.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import com.ssafy.dingdong.domain.room.dto.response.RoomResponseDto;
import com.ssafy.dingdong.global.response.DataResponse;

import io.swagger.annotations.Api;

@Api(tags = "Room", description = "방 꾸미기 API")
public interface RoomSwagger {

	DataResponse<RoomResponseDto> getMyRoom(Authentication authentication);

	DataResponse<RoomResponseDto> getRoomByMemberId(@PathVariable String roomId);

	DataResponse<RoomResponseDto> getRoomByRoomId(@PathVariable Long roomId);

}
